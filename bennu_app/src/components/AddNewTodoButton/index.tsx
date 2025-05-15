import {useModal} from "@services";

import {MutateTodoModal, Icon} from "@components";

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
      name="circle-plus"
      size={30}
      color="primary"
      iconStyle="solid"
    />
  );
}
