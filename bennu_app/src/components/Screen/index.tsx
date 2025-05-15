import React from "react";
import {KeyboardAvoidingView, Platform, ViewStyle} from "react-native";

import {useAppSafeArea} from "@hooks";

import {Icon} from "../Icon";
import {Text} from "../Text";

import {ScrollViewContainer, ViewContainer} from "./components/Container";
import {Content, Header, HeaderButton} from "./styles";

interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  title?: string;
  showBackButton?: boolean;
  showHeader?: boolean;
  scrollable?: boolean;
  headerRight?: React.ReactNode;
  onBackPress?: () => void;
}

export function Screen({
  children,
  style,
  title,
  showBackButton = false,
  showHeader = true,
  scrollable = false,
  headerRight,
  onBackPress,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Container
        style={{paddingTop: top, paddingBottom: bottom, width: "100%"}}>
        {showHeader && (
          <Header>
            {showBackButton && (
              <HeaderButton onPress={onBackPress}>
                <Icon name="arrow-left" size={20} color="gray800" />
              </HeaderButton>
            )}
            {title && (
              <Text preset="heading1" color="primary">
                {title}
              </Text>
            )}

            {headerRight}
          </Header>
        )}

        <Content style={style}>{children}</Content>
      </Container>
    </KeyboardAvoidingView>
  );
}
