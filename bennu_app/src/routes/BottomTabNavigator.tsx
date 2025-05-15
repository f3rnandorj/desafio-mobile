import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

import {AllTodoScreen, ActiveTodoScreen, CompletedTodoScreen} from "../screens";

import {BottomTabBar} from "./BottomTabBar";

export type BottomTabParamList = {
  AllTodoScreen: undefined;
  ActiveTodoScreen: undefined;
  CompletedTodoScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <BottomTabBar {...props} />;
  }

  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name="ActiveTodoScreen" component={ActiveTodoScreen} />
      <Tab.Screen name="CompletedTodoScreen" component={CompletedTodoScreen} />
      <Tab.Screen name="AllTodoScreen" component={AllTodoScreen} />
    </Tab.Navigator>
  );
}
