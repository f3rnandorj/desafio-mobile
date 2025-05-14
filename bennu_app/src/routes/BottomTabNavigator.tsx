import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

import {
  AllTasksScreen,
  ActiveTasksScreen,
  CompletedTasksScreen,
} from "../screens";

import {BottomTabBar} from "./BottomTabBar";

export type BottomTabParamList = {
  AllTasksScreen: undefined;
  ActiveTasksScreen: undefined;
  CompletedTasksScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <BottomTabBar {...props} />;
  }

  return (
    <Tab.Navigator tabBar={renderTabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name="ActiveTasksScreen" component={ActiveTasksScreen} />
      <Tab.Screen
        name="CompletedTasksScreen"
        component={CompletedTasksScreen}
      />
      <Tab.Screen name="AllTasksScreen" component={AllTasksScreen} />
    </Tab.Navigator>
  );
}
