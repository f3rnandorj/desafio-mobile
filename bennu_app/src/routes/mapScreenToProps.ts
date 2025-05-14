import {BottomTabParamList} from "./BottomTabNavigator";

export const mapScreenToProps: Record<
  keyof BottomTabParamList,
  {
    label: string;
  }
> = {
  AllTasksScreen: {
    label: "Todos",
  },
  ActiveTasksScreen: {
    label: "Ativos",
  },
  CompletedTasksScreen: {
    label: "Concluídos",
  },
};
