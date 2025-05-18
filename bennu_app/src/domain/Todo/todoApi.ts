import {api} from "@api";

import {CreateTodoParams, TodoApi, TodoItemApi, UpdateTodoParams} from ".";

async function getTodoList(): Promise<TodoApi> {
  console.log("antes");
  const response = await api.get<TodoApi>("/tasks");
  console.log("response", response);
  return response.data;
}

async function getTodoById(id: number): Promise<TodoApi> {
  const response = await api.get<TodoApi>(`/task/${id}`);
  return response.data;
}

async function updateTodo(params: UpdateTodoParams): Promise<TodoItemApi> {
  const response = await api.put<TodoItemApi>("/task/update", params);
  return response.data;
}

async function createTodo(params: CreateTodoParams): Promise<void> {
  await api.post<void>("/task/create", params);
}

async function deleteTodo(id: number): Promise<void> {
  await api.delete<void>("/task/delete", {
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
