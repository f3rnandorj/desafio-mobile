import {FlatList, ListRenderItemInfo} from "react-native";

import {Todo} from "@domain";
import {useAlert, useToast} from "@services";

import {EmptyTodoList} from "./components/EmptyTodoList";
import {TodoItem} from "./components/TodoItem";

interface Props {
  todos: Todo[];
}

export function TodoList({todos}: Props) {
  const {showAlert} = useAlert();
  const {showToast} = useToast();

  function handleToggleStatus(id: string) {
    // TODO:
    console.log("Toggle status for todo:", id);
  }

  function handleEdit(id: string) {
    // TODO:
    console.log("Edit todo:", id);

    showToast({
      message: "This feature is not implemented yet.",
      type: "error",
    });
  }

  function handleDelete(id: string) {
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

  function renderItem({item}: ListRenderItemInfo<Todo>) {
    return (
      <TodoItem
        id={item.id}
        title={item.title}
        completed={item.completed}
        description={item.description}
        onToggleStatus={handleToggleStatus}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    );
  }

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ListEmptyComponent={<EmptyTodoList />}
      contentContainerStyle={
        todos.length === 0
          ? {flex: 1, justifyContent: "center", alignItems: "center"}
          : {}
      }
    />
  );
}
