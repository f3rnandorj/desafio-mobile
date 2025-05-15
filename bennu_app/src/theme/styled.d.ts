import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      background: string;
      backgroundContrast: string;
      white: string;
      black: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
    };
    spacing: {
      s2: number;
      s4: number;
      s8: number;
      s12: number;
      s16: number;
      s24: number;
      s32: number;
      s48: number;
    };
    fontSizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    fontWeights: {
      regular: string;
      medium: string;
      bold: string;
    };
    borderRadius: {
      sm: number;
      md: number;
      lg: number;
      round: number;
    };
    shadows: {
      sm: {
        shadowColor: string;
        shadowOffset: {width: number; height: number};
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
      };
      md: {
        shadowColor: string;
        shadowOffset: {width: number; height: number};
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
      };
      lg: {
        shadowColor: string;
        shadowOffset: {width: number; height: number};
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
      };
    };
  }
}
