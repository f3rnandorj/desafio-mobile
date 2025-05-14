import React from "react";

import {Screen, Text} from "@components";

import {Container} from "./styles";

export function CompletedTasksScreen() {
  return (
    <Screen title="Lista de Tarefas Concluídas">
      <Container>
        <Text>Completed Tasks Screen</Text>
      </Container>
    </Screen>
  );
}
