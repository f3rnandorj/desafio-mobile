import React from "react";
import {ScrollView, View, ViewStyle} from "react-native";

import {DefaultTheme, useTheme} from "styled-components/native";

interface Props {
  children: React.ReactNode;
  backgroundColor?: keyof DefaultTheme["colors"];
  style?: ViewStyle;
}

export function ScrollViewContainer({
  children,
  backgroundColor = "background",
  style,
}: Props) {
  const {colors} = useTheme();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[{backgroundColor: colors[backgroundColor], flex: 1}, style]}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({
  children,
  backgroundColor = "background",
  style,
}: Props) {
  const {colors} = useTheme();

  return (
    <View style={[{backgroundColor: colors[backgroundColor], flex: 1}, style]}>
      {children}
    </View>
  );
}
