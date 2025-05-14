import styled, {DefaultTheme} from "styled-components/native";

import {TextPresetNames, TextProps} from ".";

interface TextPreset {
  fontSize: keyof DefaultTheme["fontSizes"];
  fontWeight: keyof DefaultTheme["fontWeights"];
}

export const presets: Record<TextPresetNames, TextPreset> = {
  heading1: {
    fontSize: "xxl",
    fontWeight: "bold",
  },
  heading2: {
    fontSize: "xl",
    fontWeight: "bold",
  },
  heading3: {
    fontSize: "lg",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "md",
    fontWeight: "regular",
  },
  label: {
    fontSize: "sm",
    fontWeight: "medium",
  },
  caption: {
    fontSize: "xs",
    fontWeight: "regular",
  },
};

export const StyledText = styled.Text<TextProps>`
  color: ${({theme, color}) =>
    color ? theme.colors[color] : theme.colors.backgroundContrast};

  font-size: ${({theme, preset = "paragraph"}) =>
    theme.fontSizes[presets[preset].fontSize]}px;

  font-weight: ${({theme, preset = "paragraph", bold, semiBold}) => {
    if (bold) {
      return theme.fontWeights.bold;
    }

    if (semiBold) {
      return theme.fontWeights.medium;
    }

    const fontWeightKey = presets[preset].fontWeight;
    return theme.fontWeights[fontWeightKey];
  }};

  font-style: ${({italic}) => (italic ? "italic" : "normal")};

  text-align: ${({align = "auto"}) => align};
`;
