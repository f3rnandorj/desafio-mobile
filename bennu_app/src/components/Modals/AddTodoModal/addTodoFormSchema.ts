import {zodSchemas} from "@form";
import {z} from "zod";

const {todo} = zodSchemas;

export const addTodoFormSchema = z.object({
  todo,
});

export type AddTodoFormData = z.infer<typeof addTodoFormSchema>;
