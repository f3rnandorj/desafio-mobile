import styled from "styled-components/native";

import {ButtonVariants} from ".";

export const StyledButton = styled.TouchableOpacity<{
  variant?: ButtonVariants;
  disabled?: boolean;
}>`
  align-items: center;

  background-color: ${({theme, variant, disabled}) =>
    disabled
      ? theme.colors.gray200
      : variant === "primary"
      ? theme.colors.primary
      : "transparent"};

  padding: ${({theme}) => theme.spacing.s16}px;
  margin: 0 ${({theme}) => theme.spacing.s8}px;

  border-radius: ${({theme}) => theme.borderRadius.md}px;
  border-width: ${({variant, disabled}) =>
    variant === "outline" && !disabled ? 2 : 0}px;
  border-color: ${({theme}) => theme.colors.primary};

  opacity: ${({disabled}) => (disabled ? 0.7 : 1)};
`;
