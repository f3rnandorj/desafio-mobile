import React from "react";
import {StatusBar} from "react-native";

import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "styled-components/native";

import {ContextProviders} from "@context";
import {Routes} from "@routes";
import {theme} from "@theme";

import {BaseModal} from "./src/components/Modals/BaseModal";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ContextProviders>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          <Routes />
          <BaseModal />
        </ContextProviders>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
