import React, {useState} from "react";

import {Screen, TodoList, AddNewTodoButton} from "@components";
import {Todo} from "@domain";

import {Container} from "./styles";

export function ActiveTasksScreen() {
  const [todos] = useState<Todo[]>([
    {id: "1", title: "Complete project proposal", completed: false},
    {id: "2", title: "Design UI mockups", completed: false},
    {id: "3", title: "Implement authentication", completed: false},
  ]);

  return (
    <Screen title="Tarefas Ativas" headerRight={<AddNewTodoButton />}>
      <Container>
        <TodoList todos={todos} />
      </Container>
    </Screen>
  );
}
