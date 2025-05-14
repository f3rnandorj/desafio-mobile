import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {CompositeScreenProps} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

import {AppStackParamList} from "./AppStack";
import {BottomTabParamList} from "./BottomTabNavigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

export type RootScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AppTabScreenProps<RouteName extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, RouteName>,
    NativeStackScreenProps<AppStackParamList, "BottomTabNavigator">
  >;
