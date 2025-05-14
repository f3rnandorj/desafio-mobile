import React from "react";
import {ViewStyle} from "react-native";

import Icon from "@react-native-vector-icons/fontawesome6";
import {useTheme} from "styled-components/native";

import {useAppSafeArea} from "@hooks";

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
  const {colors} = useTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <Container style={{paddingTop: top, paddingBottom: bottom}}>
      {showHeader && (
        <Header>
          {showBackButton && (
            <HeaderButton onPress={onBackPress}>
              <Icon
                name="arrow-left"
                size={20}
                color={colors.gray800}
                iconStyle="solid"
              />
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
  );
}
