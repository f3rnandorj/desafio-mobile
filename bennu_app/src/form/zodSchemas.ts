import {z} from "zod";

const todo = z
  .string({required_error: "Tarefa é obrigatória"})
  .min(1, "Tarefa é obrigatória");

export const zodSchemas = {
  todo,
};
