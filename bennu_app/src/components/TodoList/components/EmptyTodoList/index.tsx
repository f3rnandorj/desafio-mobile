import {Button, Icon, Loading} from "@components";
import {useTodoGetList} from "@domain";
import {useAppSelector} from "@features";

import {EmptyState, EmptyStateText} from "./styles";

export function EmptyTodoList() {
  const {isGetListError, isLoading} = useAppSelector(state => state.todo);
  const {fetchTodos} = useTodoGetList({});

  if (isLoading) {
    return (
      <EmptyState>
        <Loading />

        <EmptyStateText preset="heading3" color="gray500">
          Carregando todos...
        </EmptyStateText>
      </EmptyState>
    );
  }

  if (isGetListError) {
    return (
      <EmptyState>
        <Icon name="wifi-off" size={48} color="danger" />

        <EmptyStateText preset="heading3" color="danger">
          Falha ao carregar tarefas. Tente novamente mais tarde.
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
        Você ainda não tem nenhuma tarefa aqui 😞
      </EmptyStateText>
    </EmptyState>
  );
}
