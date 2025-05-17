import {TextStyle} from "react-native";

import styled from "styled-components/native";

import {TextPresetNames, TextProps} from ".";

export const $fontSizes: Record<TextPresetNames, TextStyle> = {
  heading1: {fontSize: 24, fontFamily: "Exile-Bold"},
  heading2: {fontSize: 20},
  heading3: {fontSize: 18},
  paragraph: {fontSize: 16},
  label: {fontSize: 14},
  caption: {fontSize: 12},
};

export const StyledText = styled.Text<TextProps>`
  ${({preset = "paragraph", theme}) => {
    const fontSize = $fontSizes[preset]?.fontSize ?? theme.fontSizes.md;
    return `
      font-size: ${fontSize}px;
    `;
  }}

  color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.backgroundContrast};

  font-family: ${({theme, bold, semiBold, italic, preset, medium}) => {
    if (
      preset === "heading1" ||
      preset === "heading2" ||
      preset === "heading3"
    ) {
      return italic ? theme.fontFamily.boldItalic : theme.fontFamily.bold;
    }
    if (bold && italic) {
      return theme.fontFamily.boldItalic;
    }
    if (semiBold && italic) {
      return theme.fontFamily.semiBoldItalic;
    }
    if (bold) {
      return theme.fontFamily.bold;
    }
    if (semiBold) {
      return theme.fontFamily.semiBold;
    }
    if (medium) {
      return theme.fontFamily.medium;
    }
    return theme.fontFamily.regular;
  }};

  font-style: ${({italic}) => (italic ? "italic" : "normal")};

  text-align: ${({align = "auto"}) => align};
`;
