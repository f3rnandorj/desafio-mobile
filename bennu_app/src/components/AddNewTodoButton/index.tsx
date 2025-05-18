import {MutateTodoModal, Icon} from "@components";
import {useModal} from "@services";

export function AddNewTodoButton() {
  const {showModal} = useModal();

  return (
    <Icon
      testID="add-new-todo-button"
      onPress={() =>
        showModal({
          content: () => MutateTodoModal({}),
          title: "Nova Tarefa",
        })
      }
      name="plus-circle"
      size={40}
      color="primary"
    />
  );
}
