import React, {ReactElement} from "react";

import {NavigationContainer} from "@react-navigation/native";
import {
  RenderOptions,
  render,
  renderHook,
  RenderHookOptions,
} from "@testing-library/react-native";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components/native";

import {ContextProviders, GlobalServiceComponents} from "@context";
import {TestRootState, TestAppStore, setupTestStore} from "@test";
import {theme} from "@theme";

export interface ExtendedRenderOptions
  extends Omit<RenderOptions, "queries" | "wrapper"> {
  preloadedState?: Partial<TestRootState>;
  store?: TestAppStore;
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
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupTestStore(preloadedState),
  } = extendedRenderOptions;

  return ({children}: {children: React.ReactNode}) => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ContextProviders>
          <NavigationContainer>{children}</NavigationContainer>
          <GlobalServiceComponents />
        </ContextProviders>
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
