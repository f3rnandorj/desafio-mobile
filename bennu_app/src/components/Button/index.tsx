import {TouchableOpacityProps} from "react-native";

import {Loading, Text} from "@components";

import {StyledButton} from "./styles";

export type ButtonVariants = "primary" | "outline";

export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariants;
  title: string;
  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  title,
  disabled,
  isLoading,
  ...buttonProps
}: ButtonProps) {
  const color = disabled
    ? "gray500"
    : variant === "primary"
    ? "white"
    : "primary";

  return (
    <StyledButton
      variant={variant}
      disabled={disabled || isLoading}
      isDisabled={disabled}
      testID="button"
      {...buttonProps}>
      {isLoading ? (
        <Loading size="small" color={color} />
      ) : (
        <Text bold preset="label" color={color}>
          {title}
        </Text>
      )}
    </StyledButton>
  );
}
