import React from "react";
import {TextInputProps as RNTextInputProps} from "react-native";

import {useTheme} from "styled-components/native";

import {Icon, IconProps} from "@components";

import {InputContainer, Input, Label} from "./styles";

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  variant?: "default" | "multiline";
}

export function TextInput({
  label,
  leftIcon,
  rightIcon,
  variant = "default",
  ...textInputProps
}: TextInputProps) {
  const {shadows, spacing} = useTheme();

  return (
    <>
      {label && <Label preset="label">{label}</Label>}

      <InputContainer {...shadows.md}>
        {leftIcon && (
          <Icon
            iconStyle="solid"
            {...leftIcon}
            color="primary"
            size={20}
            style={{marginRight: spacing.s8}}
          />
        )}

        <Input
          placeholder="Add a new task..."
          placeholderTextColor="#9CA3AF"
          multiline={variant === "multiline"}
          numberOfLines={variant === "multiline" ? 3 : 1}
          textAlignVertical={variant === "multiline" ? "top" : "center"}
          {...textInputProps}
        />

        {rightIcon && (
          <Icon
            iconStyle="solid"
            {...rightIcon}
            color="primary"
            size={20}
            style={{marginLeft: spacing.s8}}
          />
        )}
      </InputContainer>
    </>
  );
}
