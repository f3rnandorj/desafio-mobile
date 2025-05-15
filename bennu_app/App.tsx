import React from "react";
import {StatusBar} from "react-native";

import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "styled-components/native";

import {Alert, Toast} from "@components";
import {ContextProviders} from "@context";
import {Routes} from "@routes";
import {MMKVStorage, initializeStorage} from "@services";
import {theme} from "@theme";

import {BaseModal} from "./src/components/Modals/BaseModal";
import {ReduxProvider} from "./src/features/provider";

initializeStorage(MMKVStorage);

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
            <Alert />
            <Toast />
          </ContextProviders>
        </ReduxProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
