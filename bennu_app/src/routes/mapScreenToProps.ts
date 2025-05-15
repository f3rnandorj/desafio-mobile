import {BottomTabParamList} from "./BottomTabNavigator";

export const mapScreenToProps: Record<
  keyof BottomTabParamList,
  {
    label: string;
  }
> = {
  AllTodoScreen: {
    label: "Todos",
  },
  ActiveTodoScreen: {
    label: "Ativos",
  },
  CompletedTodoScreen: {
    label: "Concluídos",
  },
};
