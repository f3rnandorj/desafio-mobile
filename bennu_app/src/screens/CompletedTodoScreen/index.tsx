import React, {useState} from "react";

import {AddNewTodoButton, Screen, TodoList} from "@components";
import {Todo} from "@domain";

import {Container} from "./styles";

export function CompletedTodoScreen() {
  const [todos] = useState<Todo[]>([]);

  return (
    <Screen title="Tarefas Concluídas" headerRight={<AddNewTodoButton />}>
      <Container>
        <TodoList todos={todos} />
      </Container>
    </Screen>
  );
}
