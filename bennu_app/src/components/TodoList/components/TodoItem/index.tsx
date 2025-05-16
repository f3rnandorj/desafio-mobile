import {useTheme} from "styled-components/native";

import {Icon, MutateTodoModal} from "@components";
import {Todo} from "@domain";
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

  const {showAlert} = useAlert();
  const {showToast} = useToast();
  const {showModal} = useModal();

  function handleToggleStatus() {
    // TODO:
    console.log("Toggle status for todo:", id);
  }

  function handleEdit() {
    showModal({
      content: () => MutateTodoModal({todo}),
      title: "Editar tarefa",
    });
  }

  function handleDelete() {
    // TODO:
    console.log("Delete todo:", id);

    showAlert({
      title: "Deletar tarefa",
      subTitle: "Você tem certeza que deseja deletar essa tarefa?",
      action: {
        onConfirm: () => console.log("Todo deleted:", id),
        onCancel: () => console.log("Todo delete canceled"),
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
