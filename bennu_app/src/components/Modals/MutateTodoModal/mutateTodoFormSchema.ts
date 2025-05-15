import {zodSchemas} from "@form";
import {z} from "zod";

const {todo, todoDescription} = zodSchemas;

export const mutateTodoFormSchema = z.object({
  todo,
  todoDescription,
});

export type MutateTodoFormData = z.infer<typeof mutateTodoFormSchema>;
