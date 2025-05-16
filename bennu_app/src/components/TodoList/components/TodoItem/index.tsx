import {useTheme} from "styled-components/native";

import {Icon, MutateTodoModal} from "@components";
import {Todo, useTodoDelete, useTodoGetList} from "@domain";
import {
  addCompletedTodo,
  removeCompletedTodo,
  useAppDispatch,
  useAppSelector,
} from "@features";
import {useAlert, useModal, useToast} from "@services";

import {
  TaskCard,
  TaskText,
  TaskActions,
  TaskContainer,
  DescriptionText,
} from "../../styles";

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({todo}: TodoItemProps) {
  const {shadows, spacing} = useTheme();

  const {completed, id, title, description} = todo;

  const {showAlert, hideAlert} = useAlert();
  const {showToast} = useToast();
  const {showModal} = useModal();

  const dispatch = useAppDispatch();
  const {concludedTodos} = useAppSelector(state => state.concludedTodo);

  const {fetchTodos} = useTodoGetList({});
  const {deleteTodo} = useTodoDelete({
    onSuccess: async () => {
      await fetchTodos();
      hideAlert();
      showToast({message: "Tarefa deletada com sucesso"});
    },
    onError: () => {
      showToast({message: "Erro ao deletar tarefa", type: "error"});
    },
  });

  async function handleToggleStatus() {
    const isCompleted = concludedTodos.some(
      concludedTodo => concludedTodo.id === id,
    );

    if (isCompleted) {
      dispatch(removeCompletedTodo(id));
      showToast({message: "Tarefa marcada como não concluída"});
    } else {
      dispatch(addCompletedTodo(todo));
      showToast({message: "Tarefa marcada como concluída"});
    }

    await fetchTodos();
  }

  function handleEdit() {
    showModal({
      content: () => MutateTodoModal({todo}),
      title: "Editar tarefa",
    });
  }

  function handleDelete() {
    showAlert({
      title: "Deletar tarefa",
      subTitle: "Você tem certeza que deseja deletar essa tarefa?",
      action: {
        onConfirm: async () => await deleteTodo(todo.id),
      },
      icon: {
        name: "trash-can",
        color: "danger",
      },
    });
  }

  return (
    <TaskContainer>
      <TaskCard {...shadows.md}>
        {completed ? (
          <Icon
            onPress={handleToggleStatus}
            name="check-circle"
            color="success"
            size={34}
            style={{marginRight: spacing.s8}}
          />
        ) : (
          <Icon
            onPress={handleToggleStatus}
            name="circle-outline"
            color="gray400"
            size={34}
            style={{marginRight: spacing.s8}}
          />
        )}

        <TaskText completed={completed}>
          {title}

          {description && (
            <DescriptionText completed={completed}>
              {"\n"}
              {description}
            </DescriptionText>
          )}
        </TaskText>

        <TaskActions>
          <Icon
            onPress={handleEdit}
            name="pen"
            color="gray400"
            style={{paddingHorizontal: spacing.s16}}
          />

          <Icon onPress={handleDelete} name="trash-can" color="danger" />
        </TaskActions>
      </TaskCard>
    </TaskContainer>
  );
}
