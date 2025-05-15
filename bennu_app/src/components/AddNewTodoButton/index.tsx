import {MutateTodoModal, Icon} from "@components";
import {useModal} from "@services";

export function AddNewTodoButton() {
  const {showModal} = useModal();

  return (
    <Icon
      onPress={() =>
        showModal({
          content: () => MutateTodoModal(),
          title: "Nova Tarefa",
        })
      }
      name="plus-circle"
      size={30}
      color="primary"
    />
  );
}
