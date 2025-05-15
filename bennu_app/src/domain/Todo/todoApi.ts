import {api} from "@api";

import {TodoApi} from ".";

async function getTodoList(): Promise<TodoApi[]> {
  const response = await api.get<TodoApi[]>("/tasks");
  return response.data;
}

async function getTodoById(id: number): Promise<TodoApi> {
  const response = await api.get<TodoApi>(`/tasks/${id}`);
  return response.data;
}

async function updateTodo(
  id: number,
  updates: Pick<TodoApi, "title" | "description">,
): Promise<TodoApi> {
  const response = await api.put<TodoApi>("/tasks/update", {
    id,
    ...updates,
  });
  return response.data;
}

async function createTodo(
  todo: Pick<TodoApi, "title" | "description">,
): Promise<void> {
  await api.post<void>("/tasks/create", todo);
}

async function deleteTodo(id: number): Promise<void> {
  await api.delete<void>("/tasks/delete", {
    data: {id},
  });
}

export const todoApi = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoList,
  getTodoById,
};
