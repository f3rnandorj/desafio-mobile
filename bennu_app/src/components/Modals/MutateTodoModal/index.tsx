import React from "react";

import {useTheme} from "styled-components/native";

import {Button, FormTextInput} from "@components";
import {Todo} from "@domain";
import {useAppSelector} from "@features";
import {useModal} from "@services";

import {ButtonsContainer, Container} from "./styles";
import {useMutateTodoForm} from "./useCases/useMutateTodoForm";

interface Props {
  todo?: Todo;
}

export function MutateTodoModal({todo}: Props) {
  const {control, titleRightIcon, descriptionRightIcon, handleSubmitForm} =
    useMutateTodoForm(todo);

  const {spacing} = useTheme();
  const {hideModal} = useModal();
  const isLoading = useAppSelector(state => state.todo.isLoading);

  return (
    <Container>
      <FormTextInput
        name="todoTitle"
        control={control}
        label="Nome da tarefa*"
        placeholder="Digite o nome da tarefa"
        rightIcon={titleRightIcon}
      />

      <FormTextInput
        name="todoDescription"
        control={control}
        variant="multiline"
        label="Descrição da tarefa"
        placeholder="Digite a descrição da tarefa"
        rightIcon={descriptionRightIcon}
      />

      <ButtonsContainer>
        <Button
          onPress={hideModal}
          title="Cancelar"
          variant="outline"
          style={{marginRight: spacing.s8, flex: 1}}
        />

        <Button
          onPress={handleSubmitForm}
          title={todo ? "Editar Tarefa" : "Adicionar Tarefa"}
          variant="primary"
          style={{marginLeft: spacing.s8, flex: 1}}
          isLoading={isLoading}
        />
      </ButtonsContainer>
    </Container>
  );
}
