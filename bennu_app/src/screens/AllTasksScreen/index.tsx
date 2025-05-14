import React from "react";
import {Text} from "react-native";

import {Screen} from "@components";

import {Container} from "./styles";

export function AllTasksScreen() {
  return (
    <Screen title="Lista de Todas Tarefas">
      <Container>
        <Text>All Tasks Screen</Text>
      </Container>
    </Screen>
  );
}
