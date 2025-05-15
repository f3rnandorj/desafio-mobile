import React from "react";

import {AddNewTodoButton, Screen, TodoList} from "@components";
import {useAppSelector} from "@features";

import {Container} from "./styles";

export function AllTodoScreen() {
  const {todos} = useAppSelector(state => state.todo);

  return (
    <Screen title="Todas Tarefas" headerRight={<AddNewTodoButton />}>
      <Container>
        <TodoList todos={todos} />
      </Container>
    </Screen>
  );
}
