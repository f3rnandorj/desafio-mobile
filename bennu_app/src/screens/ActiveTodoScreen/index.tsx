import React from "react";

import {Screen, TodoList, AddNewTodoButton} from "@components";
import {useTodoGetList} from "@domain";
import {useAppSelector} from "@features";

import {Container} from "./styles";

export function ActiveTodoScreen() {
  useTodoGetList();

  const todoData = useAppSelector(state => state.todo);
  const activeTodoList = todoData.todos.filter(todo => !todo.completed);

  return (
    <Screen title="Tarefas Ativas" headerRight={<AddNewTodoButton />}>
      <Container>
        <TodoList todos={activeTodoList} />
      </Container>
    </Screen>
  );
}
