import {z} from "zod";

const todoTitle = z
  .string({required_error: "Tarefa é obrigatória"})
  .min(4, "Tarefa muito curta");

const todoDescription = z.string().optional();

export const zodSchemas = {
  todoTitle,
  todoDescription,
};
