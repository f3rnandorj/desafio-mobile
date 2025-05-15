import React from "react";

import {AddNewTodoButton, Screen, TodoList} from "@components";
import {useAppSelector} from "@features";

import {Container} from "./styles";

export function AllTodoScreen() {
  const todoData = useAppSelector(state => state.todo);

  return (
    <Screen title="Todas Tarefas" headerRight={<AddNewTodoButton />}>
      <Container>
        <TodoList todos={todoData.todos} />
      </Container>
    </Screen>
  );
}
