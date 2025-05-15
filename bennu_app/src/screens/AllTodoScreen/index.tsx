import React, {useState} from "react";

import {AddNewTodoButton, Screen, TodoList} from "@components";
import {Todo} from "@domain";

import {Container} from "./styles";

export function AllTodoScreen() {
  const [todos] = useState<Todo[]>([
    {id: "1", title: "Complete project proposal", completed: false},
    {id: "2", title: "Design UI mockups", completed: true},
    {id: "3", title: "Implement authentication", completed: false},
  ]);

  return (
    <Screen title="Todas Tarefas" headerRight={<AddNewTodoButton />}>
      <Container>
        <TodoList todos={todos} />
      </Container>
    </Screen>
  );
}
