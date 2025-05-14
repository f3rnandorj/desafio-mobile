import styled from "styled-components/native";

import {ButtonVariants} from ".";

export const StyledButton = styled.TouchableOpacity<{
  variant?: ButtonVariants;
}>`
  flex: 1;
  background-color: ${({theme, variant}) =>
    variant === "primary" ? theme.colors.primary : "transparent"};
  padding: ${({theme}) => theme.spacing.s16}px;
  border-radius: ${({theme}) => theme.borderRadius.md}px;
  align-items: center;
  margin-horizontal: ${({theme}) => theme.spacing.s8}px;
  border-width: ${({variant}) => (variant === "secondary" ? 1 : 0)}px;
  border-color: ${({theme}) => theme.colors.gray300};
`;
