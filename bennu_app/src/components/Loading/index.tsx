import React from "react";
import {ActivityIndicator} from "react-native";

import {DefaultTheme, useTheme} from "styled-components/native";

import {Overlay} from "./styles";

interface CustomActivityIndicatorProps {
  size?: "small" | "large";
  color?: keyof DefaultTheme["colors"];
  fullScreen?: boolean;
}

export function Loading({
  size = "large",
  color = "primary",
  fullScreen = false,
}: CustomActivityIndicatorProps) {
  const {colors} = useTheme();

  if (fullScreen) {
    return (
      <Overlay>
        <ActivityIndicator testID="loading" size={size} color={colors[color]} />
      </Overlay>
    );
  }

  return (
    <ActivityIndicator testID="loading" size={size} color={colors[color]} />
  );
}
