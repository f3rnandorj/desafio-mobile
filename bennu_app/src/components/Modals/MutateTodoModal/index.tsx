import React from "react";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useTheme} from "styled-components/native";

import {Button, FormTextInput, IconProps} from "@components";
import {useTodoCreate, useTodoGetList} from "@domain";
import {useAppSelector} from "@features";
import {useModal, useToast} from "@services";

import {MutateTodoFormData, mutateTodoFormSchema} from "./mutateTodoFormSchema";
import {ButtonsContainer, Container} from "./styles";

export function MutateTodoModal() {
  const {control, watch, setValue, handleSubmit} = useForm<MutateTodoFormData>({
    resolver: zodResolver(mutateTodoFormSchema),
    defaultValues: {},
  });

  const {isLoading} = useAppSelector(state => state.todo);

  const {spacing} = useTheme();
  const {hideModal} = useModal();
  const {showToast} = useToast();

  const {fetchTodos} = useTodoGetList({});
  const {createTodo} = useTodoCreate({
    onSuccess: async () => {
      await fetchTodos();
      hideModal();
      showToast({message: "Tarefa criada com sucesso"});
    },
    onError: () => {
      showToast({message: "Erro ao criar tarefa", type: "error"});
    },
  });

  const title = watch("todo");
  const description = watch("todoDescription");

  const titleRightIcon: IconProps | undefined =
    title && title.length > 0
      ? {
          name: "close",
          color: "danger",
          onPress: () => setValue("todo", ""),
        }
      : undefined;

  const descriptionRightIcon: IconProps | undefined =
    description && description.length > 0
      ? {
          name: "close",
          color: "danger",
          onPress: () => setValue("todoDescription", ""),
        }
      : undefined;

  async function handleCreateTodo(data: MutateTodoFormData) {
    await createTodo({title: data.todo, description: data.todoDescription});
  }

  return (
    <Container>
      <FormTextInput
        name="todo"
        control={control}
        label="Nome da tarefa*"
        placeholder="Enter task title"
        rightIcon={titleRightIcon}
      />

      <FormTextInput
        name="todoDescription"
        control={control}
        variant="multiline"
        label="Descrição da tarefa"
        placeholder="Enter task description"
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
          onPress={handleSubmit(handleCreateTodo)}
          title="Adicionar Tarefa"
          variant="primary"
          style={{marginLeft: spacing.s8, flex: 1}}
          isLoading={isLoading}
        />
      </ButtonsContainer>
    </Container>
  );
}
