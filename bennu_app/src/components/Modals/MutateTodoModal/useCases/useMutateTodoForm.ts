import {useEffect} from "react";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {IconProps} from "@components";
import {Todo, useTodoCreate, useTodoGetList, useTodoUpdate} from "@domain";
import {useModal, useToast} from "@services";

import {
  MutateTodoFormData,
  mutateTodoFormSchema,
} from "../mutateTodoFormSchema";

export function useMutateTodoForm(todo?: Todo) {
  const {control, watch, setValue, handleSubmit} = useForm<MutateTodoFormData>({
    resolver: zodResolver(mutateTodoFormSchema),
    defaultValues: {},
  });

  const {fetchTodos} = useTodoGetList({});
  const {hideModal} = useModal();
  const {showToast} = useToast();

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

  const {updateTodo} = useTodoUpdate({
    onSuccess: async () => {
      await fetchTodos();
      hideModal();
      showToast({message: "Tarefa alterada com sucesso"});
    },
    onError: () => {
      showToast({message: "Erro ao editar tarefa", type: "error"});
    },
  });

  const handleCreateOrUpdate = async (data: MutateTodoFormData) => {
    if (!todo) {
      await createTodo({
        title: data.todoTitle,
        description: data.todoDescription,
      });
    } else {
      await updateTodo({
        id: todo.id,
        title: data.todoTitle,
        description: data.todoDescription,
      });
    }
  };

  useEffect(() => {
    if (todo) {
      setValue("todoTitle", todo.title);
      setValue("todoDescription", todo.description);
    }
  }, [setValue, todo]);

  const todoTitle = watch("todoTitle");
  const todoDescription = watch("todoDescription");

  const titleRightIcon: IconProps | undefined = getClearIcon(todoTitle, () =>
    setValue("todoTitle", ""),
  );

  const descriptionRightIcon: IconProps | undefined = getClearIcon(
    todoDescription,
    () => setValue("todoDescription", ""),
  );

  return {
    control,
    titleRightIcon,
    descriptionRightIcon,
    handleSubmitForm: handleSubmit(handleCreateOrUpdate),
  };
}

function getClearIcon(
  value: string | undefined,
  onPress: () => void,
): IconProps | undefined {
  if (value && value.length > 0) {
    return {
      name: "close",
      color: "danger",
      onPress,
    };
  }
  return undefined;
}
