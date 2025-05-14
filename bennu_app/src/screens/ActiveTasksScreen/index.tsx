import React, {useState} from "react";

import {Icon, Screen, TodoList} from "@components";
import {Todo} from "@domain";

import {Container} from "./styles";

export function ActiveTasksScreen() {
  const [todos] = useState<Todo[]>([
    {id: "1", title: "Complete project proposal", completed: false},
    {id: "2", title: "Design UI mockups", completed: true},
    {id: "3", title: "Implement authentication", completed: false},
  ]);

  return (
    <Screen
      title="Lista de Tarefas Ativas"
      headerRight={
        <Icon
          onPress={() => {}}
          name="circle-plus"
          size={30}
          color="primary"
          iconStyle="solid"
        />
      }>
      <Container>
        <TodoList todos={todos} />
      </Container>
    </Screen>
  );
}
