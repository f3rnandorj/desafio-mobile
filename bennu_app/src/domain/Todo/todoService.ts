import {store} from "@features";

import {todoAdapter} from "./todoAdapter";
import {todoApi} from "./todoApi";

import {CreateTodoParams, Todo, TodoItemApi, UpdateTodoParams} from ".";

async function getTodoList(): Promise<Todo[]> {
  const {tasks} = await todoApi.getTodoList();
  return tasks.length > 0 ? tasks.map(todo => mapTodoWithCompleted(todo)) : [];
}

async function getTodoById(id: number): Promise<Todo> {
  const {tasks} = await todoApi.getTodoById(id);
  return mapTodoWithCompleted(tasks[0]);
}

async function updateTodo(params: UpdateTodoParams): Promise<Todo> {
  const response = await todoApi.updateTodo(params);
  return mapTodoWithCompleted(response);
}

async function createTodo(params: CreateTodoParams): Promise<void> {
  await todoApi.createTodo(params);
}

async function deleteTodo(id: number): Promise<void> {
  await todoApi.deleteTodo(id);
}

function mapTodoWithCompleted(data: TodoItemApi): Todo {
  const base = todoAdapter.toTodo(data);
  const concludedTodos = store.getState().concludedTodo.concludedTodos;

  const completed = concludedTodos.some(
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
