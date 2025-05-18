import React, {ReactElement} from "react";

import {NavigationContainer} from "@react-navigation/native";
import {
  RenderOptions,
  render,
  renderHook,
  RenderHookOptions,
} from "@testing-library/react-native";
import {Provider} from "react-redux";
import {persistStore} from "redux-persist";
import {PersistPartial} from "redux-persist/es/persistReducer";
import {PersistGate} from "redux-persist/integration/react";
import {ThemeProvider} from "styled-components/native";

import {ContextProviders, GlobalServiceComponents} from "@context";
import {AppStore, PersistedRootState, RootState, setupStore} from "@features";
import {theme} from "@theme";

interface ExtendedRenderOptions
  extends Omit<RenderOptions, "queries" | "wrapper"> {
  preloadedState?: Partial<RootState> & PersistPartial;
  store?: AppStore;
}

const wrapAllProviders = () => {
  return ({children}: {children: React.ReactNode}) => (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children} </NavigationContainer>
    </ThemeProvider>
  );
};

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: ExtendedRenderOptions,
) {
  return render(component, {wrapper: wrapAllProviders(), ...options});
}

//--------------------------------------------------------------------------//

const wrapScreenProviders = (
  extendedRenderOptions: ExtendedRenderOptions = {},
) => {
  const {
    preloadedState = {_persist: {version: 1, rehydrated: true}},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState as PersistedRootState),
  } = extendedRenderOptions;

  const persistor = persistStore(store);

  return ({children}: {children: React.ReactNode}) => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ContextProviders>
            <NavigationContainer>{children}</NavigationContainer>
            <GlobalServiceComponents />
          </ContextProviders>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export function renderScreen<T = unknown>(
  component: ReactElement<T>,
  options: ExtendedRenderOptions = {},
) {
  return render(component, {wrapper: wrapScreenProviders(options), ...options});
}

//--------------------------------------------------------------------------//

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, "wrapper">,
) {
  return renderHook(renderCallback, {
    wrapper: wrapAllProviders(),
    ...options,
  });
}

export * from "@testing-library/react-native";
export {customRender as render};
export {customRenderHook as renderHook};
