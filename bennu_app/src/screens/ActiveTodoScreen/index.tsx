import React from "react";

import {Screen, TodoList, AddNewTodoButton} from "@components";
import {useTodoGetList} from "@domain";
import {useAppSelector} from "@features";

import {Container} from "./styles";

export function ActiveTodoScreen() {
  const {todos} = useAppSelector(state => state.todo);
  const activeTodoList = todos.filter(todo => !todo.completed);

  useTodoGetList({enabled: true});
  return (
    <Screen title="Tarefas Ativas" headerRight={<AddNewTodoButton />}>
      <Container>
        <TodoList todos={activeTodoList} />
      </Container>
    </Screen>
  );
}
