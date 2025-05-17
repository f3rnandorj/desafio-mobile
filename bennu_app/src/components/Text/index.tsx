import React from "react";
import {TextProps as RNTextProps} from "react-native";

import {DefaultTheme} from "styled-components/native";

import {StyledText} from "./styles";

export type TextPresetNames =
  | "heading1"
  | "heading2"
  | "heading3"
  | "paragraph"
  | "label"
  | "caption";

export interface TextProps extends RNTextProps {
  preset?: TextPresetNames;
  bold?: boolean;
  semiBold?: boolean;
  italic?: boolean;
  medium?: boolean;
  color?: keyof DefaultTheme["colors"];
  align?: "auto" | "left" | "right" | "center" | "justify";
}

export function Text({
  children,
  preset = "paragraph",
  bold,
  semiBold,
  italic,
  medium,
  color,
  align,
  style,
  ...rest
}: TextProps) {
  return (
    <StyledText
      preset={preset}
      bold={bold}
      semiBold={semiBold}
      italic={italic}
      medium={medium}
      color={color}
      align={align}
      style={style}
      {...rest}>
      {children}
    </StyledText>
  );
}
