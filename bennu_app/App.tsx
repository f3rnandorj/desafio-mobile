import React from "react";
import {StatusBar} from "react-native";

import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "styled-components/native";

import {HomeScreen} from "@screens";
import {theme} from "@theme";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        <HomeScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
