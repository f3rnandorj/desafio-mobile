import React, {useState} from "react";

import {useTheme} from "styled-components/native";

import {Button, IconProps, TextInput} from "@components";

import {ButtonsContainer, Container} from "./styles";

export function AddTodoModal() {
  const [title, setTitle] = useState("");
  const {spacing} = useTheme();

  const textInputRightIcon: IconProps | undefined =
    title.length > 0
      ? {
          name: "x",
          iconStyle: "solid",
          color: "danger",
          onPress: () => setTitle(""),
        }
      : undefined;

  return (
    <Container>
      <TextInput
        label="Nome da tarefa"
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
        rightIcon={textInputRightIcon}
      />

      <ButtonsContainer>
        <Button
          onPress={() => {}}
          title="Cancelar"
          variant="secondary"
          style={{marginRight: spacing.s8}}
        />

        <Button
          onPress={() => {}}
          title="Adicionar Tarefa"
          variant="primary"
          disabled={title.length === 0}
          style={{marginLeft: spacing.s8}}
        />
      </ButtonsContainer>
    </Container>
  );
}
