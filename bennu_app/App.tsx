import React from "react";
import {StatusBar} from "react-native";

import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "styled-components/native";

import {ContextProviders, GlobalServiceComponents} from "@context";
import {Routes} from "@routes";
import {theme} from "@theme";

import {BaseModal} from "./src/components/Modals/BaseModal";
import {ReduxProvider} from "./src/features/provider";

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
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
    </GestureHandlerRootView>
  );
}

export default App;
