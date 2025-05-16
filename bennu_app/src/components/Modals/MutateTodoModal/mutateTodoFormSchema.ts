import {zodSchemas} from "@form";
import {z} from "zod";

const {todoTitle, todoDescription} = zodSchemas;

export const mutateTodoFormSchema = z.object({
  todoTitle,
  todoDescription,
});

export type MutateTodoFormData = z.infer<typeof mutateTodoFormSchema>;
