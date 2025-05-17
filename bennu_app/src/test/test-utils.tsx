import React, {ReactElement} from "react";

import {NavigationContainer} from "@react-navigation/native";
import {
  RenderOptions,
  render,
  renderHook,
  RenderHookOptions,
} from "@testing-library/react-native";
import {ThemeProvider} from "styled-components/native";

import {ContextProviders, GlobalServiceComponents} from "@context";
import {theme} from "@theme";

export const wrapAllProviders = () => {
  return ({children}: {children: React.ReactNode}) => (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children} </NavigationContainer>
    </ThemeProvider>
  );
};

function customRender<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(component, {wrapper: wrapAllProviders(), ...options});
}

export const wrapScreenProviders = () => {
  return ({children}: {children: React.ReactNode}) => (
    <ThemeProvider theme={theme}>
      <ContextProviders>
        <NavigationContainer>{children} </NavigationContainer>
      </ContextProviders>
      <GlobalServiceComponents />
    </ThemeProvider>
  );
};

export function renderScreen<T = unknown>(
  component: ReactElement<T>,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(component, {wrapper: wrapScreenProviders(), ...options});
}

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
