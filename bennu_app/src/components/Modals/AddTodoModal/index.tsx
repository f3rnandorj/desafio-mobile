import React, {useState} from "react";

import {useTheme} from "styled-components/native";

import {Button, TextInput} from "@components";

import {ButtonsContainer} from "./styles";

export function TodoModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {spacing} = useTheme();

  return (
    <>
      <TextInput
        label="Nome da tarefa"
        placeholder="Enter task title"
        value={title}
        onChangeText={setTitle}
        leftIcon={{name: "list", iconStyle: "solid"}}
      />

      <TextInput
        label="Descrição (Opcional)"
        placeholder="Enter task description"
        value={description}
        onChangeText={setDescription}
        variant="multiline"
        leftIcon={{name: "align-left", iconStyle: "solid"}}
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
          style={{marginLeft: spacing.s8}}
        />
      </ButtonsContainer>
    </>
  );
}
