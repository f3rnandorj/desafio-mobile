import React from "react";
import {TextInputProps as RNTextInputProps, View} from "react-native";

import {useTheme} from "styled-components/native";

import {Icon, IconProps} from "@components";

import {InputContainer, Input, Label, ErrorMessage} from "./styles";

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  variant?: "default" | "multiline";
}

export function TextInput({
  label,
  errorMessage,
  leftIcon,
  rightIcon,
  variant = "default",
  ...textInputProps
}: TextInputProps) {
  const {shadows, spacing, colors} = useTheme();

  return (
    <View>
      {label && <Label preset="label">{label}</Label>}

      <InputContainer {...shadows.md}>
        {leftIcon && (
          <Icon
            iconStyle="solid"
            size={16}
            {...leftIcon}
            style={{marginRight: spacing.s8}}
          />
        )}

        <Input
          placeholder="Add a new task..."
          placeholderTextColor={colors.gray400}
          multiline={variant === "multiline"}
          numberOfLines={variant === "multiline" ? 3 : 1}
          textAlignVertical={variant === "multiline" ? "top" : "center"}
          {...textInputProps}
        />

        {rightIcon && (
          <Icon
            iconStyle="solid"
            size={16}
            {...rightIcon}
            style={{marginLeft: spacing.s8}}
          />
        )}
      </InputContainer>

      {errorMessage && (
        <ErrorMessage preset="caption" color="danger">
          {errorMessage}
        </ErrorMessage>
      )}
    </View>
  );
}
