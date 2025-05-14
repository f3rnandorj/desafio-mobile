import React from "react";
import {Text} from "react-native";

import {Screen} from "@components";

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
