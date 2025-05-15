import React from "react";

import {AddNewTodoButton, Screen, TodoList} from "@components";
import {useAppSelector} from "@features";

import {Container} from "./styles";

export function CompletedTodoScreen() {
  const todoData = useAppSelector(state => state.todo);
  const completedTodoList = todoData.todos.filter(todo => !todo.completed);

  return (
    <Screen title="Tarefas Concluídas" headerRight={<AddNewTodoButton />}>
      <Container>
        <TodoList todos={completedTodoList} />
      </Container>
    </Screen>
  );
}
