import React from "react";
import {StatusBar} from "react-native";

import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "styled-components/native";

import {ContextProviders, GlobalServiceComponents} from "@context";
import {ReduxProvider} from "@features";
import {Routes} from "@routes";
import {theme} from "@theme";

import {BaseModal} from "./src/components/Modals/BaseModal";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ReduxProvider>
          <ContextProviders>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />

            <Routes />

            <BaseModal />
            <GlobalServiceComponents />
          </ContextProviders>
        </ReduxProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
