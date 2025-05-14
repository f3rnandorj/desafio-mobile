import {TouchableOpacityProps} from "react-native";

import {Text} from "@components";

import {StyledButton} from "./styles";

export type ButtonVariants = "primary" | "secondary";

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariants;
  title: string;
}

export function Button({variant, title, ...buttonProps}: ButtonProps) {
  return (
    <StyledButton variant={variant} {...buttonProps}>
      <Text bold color={variant === "primary" ? "white" : "primary"}>
        {title}
      </Text>
    </StyledButton>
  );
}
