import {concludedTodoService} from "@services";

import {todoAdapter} from "./todoAdapter";
import {todoApi} from "./todoApi";

import {Todo, TodoApi} from ".";

async function getTodoList(): Promise<Todo[]> {
  const response = await todoApi.getTodoList();
  return response.map(todo => mapTodoWithCompleted(todo));
}

async function getTodoById(id: number): Promise<Todo> {
  const response = await todoApi.getTodoById(id);
  return mapTodoWithCompleted(response);
}

async function updateTodo(
  id: number,
  updates: Pick<TodoApi, "title" | "description">,
): Promise<Todo> {
  const response = await todoApi.updateTodo(id, updates);
  return mapTodoWithCompleted(response);
}

async function createTodo(
  todo: Pick<TodoApi, "title" | "description">,
): Promise<void> {
  await todoApi.createTodo(todo);
}

async function deleteTodo(id: number): Promise<void> {
  await todoApi.deleteTodo(id);
}

function mapTodoWithCompleted(data: TodoApi): Todo {
  const base = todoAdapter.toTodo(data);
  const {concludedTodoList} = concludedTodoService();

  const completed = concludedTodoList.some(
    concludedTodo => concludedTodo.id === data.id,
  );

  return {
    ...base,
    completed,
  };
}

export const todoService = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoList,
  getTodoById,
};
