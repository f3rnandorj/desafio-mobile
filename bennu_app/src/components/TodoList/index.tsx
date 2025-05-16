import {FlatList, ListRenderItemInfo} from "react-native";

import {Todo} from "@domain";

import {EmptyTodoList} from "./components/EmptyTodoList";
import {TodoItem} from "./components/TodoItem";

interface Props {
  todos: Todo[];
}

export function TodoList({todos}: Props) {
  function renderItem({item}: ListRenderItemInfo<Todo>) {
    return <TodoItem todo={item} />;
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
