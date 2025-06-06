import React, {useEffect} from "react";
import {ColorValue, Dimensions, ViewProps} from "react-native";

import Animated, {FadeIn, FadeOut} from "react-native-reanimated";
import {useTheme} from "styled-components/native";

import {ToastPosition, ToastType, useToast} from "@services";

import {Icon, IconProps} from "../Icon";

import {ActionButton, Message, TextBox, ActionText} from "./styles";

export type ToastIconProps = {
  color: ColorValue | undefined;
  icon: IconProps;
};

interface Props {
  isInsideModal: boolean;
}

export function Toast({isInsideModal}: Props) {
  const {toast, hideToast} = useToast();
  const {colors} = useTheme();

  const position: ToastPosition = toast?.position || "top";
  const type: ToastType = toast?.type || "success";
  const duration: number = toast?.duration || 3000;
  const onPress = () => {
    if (toast?.action?.onPress) {
      toast.action.onPress();
    } else {
      hideToast();
    }
  };

  const mapToToast: Record<ToastType, ToastIconProps> = {
    success: {
      color: colors.success,
      icon: {
        name: "check-circle",
      },
    },
    error: {
      color: colors.danger,
      icon: {
        name: "alpha-x-circle",
      },
    },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (toast) {
        hideToast();
      }
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [duration, hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      testID="toast"
      style={[
        {
          [position]: isInsideModal ? 20 : 50,
          backgroundColor: mapToToast?.[type].color,
        },
        $wrapper,
      ]}
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}>
      <Icon {...mapToToast[type].icon} size={65} color="white" />

      <TextBox>
        <Message semiBold color="white">
          {toast?.message}
        </Message>
      </TextBox>

      <ActionButton hitSlop={10} onPress={onPress}>
        <ActionText color="white">{toast?.action?.title || "OK"}</ActionText>
      </ActionButton>
    </Animated.View>
  );
}

const $wrapper: ViewProps["style"] = {
  flexDirection: "row",
  alignSelf: "center",
  alignItems: "center",
  position: "absolute",
  maxWidth: Dimensions.get("screen").width * 0.9,
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderRadius: 16,
};
