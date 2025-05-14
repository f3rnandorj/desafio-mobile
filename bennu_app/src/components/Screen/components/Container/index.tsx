import React from "react";
import {ScrollView, View} from "react-native";

import {DefaultTheme, useTheme} from "styled-components/native";

interface Props {
  children: React.ReactNode;
  backgroundColor?: keyof DefaultTheme["colors"];
}

export function ScrollViewContainer({
  children,
  backgroundColor = "background",
}: Props) {
  const {colors} = useTheme();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: colors[backgroundColor], flex: 1}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({
  children,
  backgroundColor = "background",
}: Props) {
  const {colors} = useTheme();

  return (
    <View style={{backgroundColor: colors[backgroundColor], flex: 1}}>
      {children}
    </View>
  );
}
