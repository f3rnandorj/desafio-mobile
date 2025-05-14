import React from "react";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useTheme} from "styled-components/native";

import {Button, FormTextInput, IconProps} from "@components";

import {AddTodoFormData, addTodoFormSchema} from "./addTodoFormSchema";
import {ButtonsContainer, Container} from "./styles";

export function AddTodoModal() {
  const {control, watch, setValue, handleSubmit} = useForm<AddTodoFormData>({
    resolver: zodResolver(addTodoFormSchema),
    defaultValues: {},
  });

  const {spacing} = useTheme();

  const title = watch("todo");

  const textInputRightIcon: IconProps | undefined =
    title?.length > 0
      ? {
          name: "x",
          iconStyle: "solid",
          color: "danger",
          onPress: () => setValue("todo", ""),
        }
      : undefined;

  async function createTodo(data: AddTodoFormData) {
    console.log("createTodo", data);
  }

  return (
    <Container>
      <FormTextInput
        name="todo"
        control={control}
        label="Nome da tarefa"
        placeholder="Enter task title"
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
          onPress={handleSubmit(createTodo)}
          title="Adicionar Tarefa"
          variant="primary"
          style={{marginLeft: spacing.s8}}
        />
      </ButtonsContainer>
    </Container>
  );
}
