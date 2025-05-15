import {Button, Icon, Loading} from "@components";
import {useTodoGetList} from "@domain";
import {useAppSelector} from "@features";

import {EmptyState, EmptyStateText} from "./styles";

export function EmptyTodoList() {
  const {isError, isLoading} = useAppSelector(state => state.todo);
  const {fetchTodos} = useTodoGetList({});

  if (isLoading) {
    return (
      <EmptyState>
        <Loading />

        <EmptyStateText preset="heading3" color="gray500">
          Loading tasks...
        </EmptyStateText>
      </EmptyState>
    );
  }

  if (isError) {
    return (
      <EmptyState>
        <Icon name="wifi-off" size={48} color="danger" />

        <EmptyStateText preset="heading3" color="danger">
          Failed to load tasks. Please try again later.
        </EmptyStateText>

        <Button
          title="Recarregar"
          style={{minWidth: 160}}
          onPress={fetchTodos}
        />
      </EmptyState>
    );
  }

  return (
    <EmptyState>
      <Icon name="clipboard-list" size={48} color="gray500" />

      <EmptyStateText preset="heading3" color="gray500">
        No tasks yet! Add your first task above.
      </EmptyStateText>
    </EmptyState>
  );
}
