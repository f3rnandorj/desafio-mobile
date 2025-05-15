import {useModal} from "@services";

import {AddTodoModal, Icon} from "@components";

export function AddNewTodoButton() {
  const {showModal} = useModal();

  return (
    <Icon
      onPress={() =>
        showModal({
          content: () => AddTodoModal(),
          heightPercentage: 0.45,
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
