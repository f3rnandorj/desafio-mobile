import React from "react";
import {SafeAreaView, Text, View} from "react-native";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: "green", flex: 1}} />

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{fontSize: 40}}>Miguel tricolor</Text>
      </View>

      <View style={{backgroundColor: "red", flex: 1}} />
    </SafeAreaView>
  );
}

export default App;
