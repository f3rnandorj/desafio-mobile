import styled from "styled-components/native";

import {ButtonVariants} from ".";

export const StyledButton = styled.TouchableOpacity<{
  variant?: ButtonVariants;
  isDisabled?: boolean;
}>`
  min-height: 56px;
  align-items: center;
  justify-content: center;

  background-color: ${({theme, variant, isDisabled}) =>
    isDisabled
      ? theme.colors.gray400
      : variant === "primary"
      ? theme.colors.primary
      : "transparent"};

  padding: ${({theme}) => theme.spacing.s16}px;
  margin: 0 ${({theme}) => theme.spacing.s8}px;

  border-radius: ${({theme}) => theme.borderRadius.md}px;
  border-width: ${({variant, isDisabled}) =>
    variant === "outline" && !isDisabled ? 2 : 0}px;
  border-color: ${({theme}) => theme.colors.primary};

  opacity: ${({isDisabled}) => (isDisabled ? 0.7 : 1)};
`;
