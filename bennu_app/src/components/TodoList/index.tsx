import {FlatList, ListRenderItemInfo} from "react-native";

import {Todo} from "@domain";

import {EmptyListMessage} from "./components/EmptyListMessage";
import {TodoItem} from "./components/TodoItem";

interface Props {
  todos: Todo[];
}

export function TodoList({todos}: Props) {
  function handleToggleStatus(id: string) {
    // TODO:
    console.log("Toggle status for todo:", id);
  }

  function handleEdit(id: string) {
    // TODO:
    console.log("Edit todo:", id);
  }

  function handleDelete(id: string) {
    // TODO:
    console.log("Delete todo:", id);
  }

  function renderItem({item}: ListRenderItemInfo<Todo>) {
    return (
      <TodoItem
        id={item.id}
        title={item.title}
        completed={item.completed}
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
      ListEmptyComponent={<EmptyListMessage />}
      contentContainerStyle={
        todos.length === 0
          ? {flex: 1, justifyContent: "center", alignItems: "center"}
          : {}
      }
    />
  );
}
