import styled from "styled-components/native";

import {ButtonVariants} from ".";

export const StyledButton = styled.TouchableOpacity<{
  variant?: ButtonVariants;
  disabled?: boolean;
}>`
  flex: 1;
  background-color: ${({theme, variant, disabled}) =>
    disabled
      ? theme.colors.gray200
      : variant === "primary"
      ? theme.colors.primary
      : "transparent"};
  padding: ${({theme}) => theme.spacing.s16}px;
  border-radius: ${({theme}) => theme.borderRadius.md}px;
  align-items: center;
  margin-horizontal: ${({theme}) => theme.spacing.s8}px;
  border-width: ${({variant, disabled}) =>
    variant === "secondary" && !disabled ? 1 : 0}px;
  border-color: ${({theme}) => theme.colors.gray300};
  opacity: ${({disabled}) => (disabled ? 0.7 : 1)};
`;
