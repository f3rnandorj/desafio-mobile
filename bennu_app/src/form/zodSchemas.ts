import {z} from "zod";

const todo = z
  .string({required_error: "Tarefa é obrigatória"})
  .min(4, "Tarefa é obrigatória");

const todoDescription = z.string().optional();

export const zodSchemas = {
  todo,
  todoDescription,
};
