import {ActivityIndicator} from "react-native";

import {useTheme} from "styled-components/native";

import {Icon, Text} from "@components";
import {useAppSelector} from "@features";

import {EmptyState} from "../../styles";

export function EmptyTodoList() {
  const {spacing} = useTheme();
  const {isError, isLoading} = useAppSelector(state => state.todo);

  if (isLoading) {
    return (
      <EmptyState>
        <ActivityIndicator />
        <Text
          color="gray500"
          style={{textAlign: "center", marginTop: spacing.s16}}>
          Loading tasks...
        </Text>
      </EmptyState>
    );
  }

  if (isError) {
    return (
      <EmptyState>
        <Icon name="wifi" size={48} color="danger" />
        <Text
          color="danger"
          style={{textAlign: "center", marginTop: spacing.s16}}>
          Failed to load tasks. Please try again later.
        </Text>
      </EmptyState>
    );
  }

  return (
    <EmptyState>
      <Icon name="clipboard-list" size={48} color="gray400" />
      <Text
        color="gray500"
        style={{textAlign: "center", marginTop: spacing.s16}}>
        No tasks yet! Add your first task above.
      </Text>
    </EmptyState>
  );
}
