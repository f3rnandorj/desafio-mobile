import {TouchableOpacityProps} from "react-native";

import {Text} from "@components";

import {StyledButton} from "./styles";

export type ButtonVariants = "primary" | "outline";

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariants;
  title: string;
}

export function Button({
  variant = "primary",
  title,
  disabled,
  ...buttonProps
}: ButtonProps) {
  return (
    <StyledButton variant={variant} disabled={disabled} {...buttonProps}>
      <Text
        bold
        color={
          disabled ? "gray500" : variant === "primary" ? "white" : "primary"
        }>
        {title}
      </Text>
    </StyledButton>
  );
}
