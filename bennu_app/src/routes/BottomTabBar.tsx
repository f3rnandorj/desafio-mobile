import React from "react";
import {Platform, Text, TouchableOpacity, View} from "react-native";

import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {useTheme} from "styled-components/native";

import {useAppSafeArea} from "@hooks";

import {BottomTabParamList} from "./BottomTabNavigator";
import {mapScreenToProps} from "./mapScreenToProps";

export function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const theme = useTheme();
  const {bottom} = useAppSafeArea();

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flexDirection: "row",
        paddingHorizontal: theme.spacing.s24,
        paddingBottom: bottom,
        gap: theme.spacing.s8,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof BottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole={Platform.OS === "web" ? "link" : "button"}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: theme.spacing.s8,
              borderRadius: theme.borderRadius.md,
              backgroundColor: isFocused
                ? theme.colors.primary
                : theme.colors.gray200,
            }}>
            <Text
              style={{
                color: isFocused ? theme.colors.white : theme.colors.gray600,
                fontWeight: isFocused ? "bold" : "500",
              }}>
              {tabItem.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
