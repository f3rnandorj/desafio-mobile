import {store} from "@features";
import {MMKVStorage} from "@services";

import {todoAdapter} from "./todoAdapter";
import {todoApi} from "./todoApi";

import {CreateTodoParams, Todo, TodoItemApi, UpdateTodoParams} from ".";

async function getTodoList(): Promise<Todo[]> {
  const allTodos = await todoApi.getTodoList();

  const tasks =
    allTodos.tasks.length > 0
      ? allTodos.tasks.map((todo, index) =>
          mapTodoWithAppAtributes(todo, index),
        )
      : [];

  await syncTodosAndUpdateStore(tasks);

  return tasks;
}

async function getTodoById(id: string): Promise<Todo> {
  const {tasks} = await todoApi.getTodoById(id);
  return mapTodoWithAppAtributes(tasks[0], 0);
}

async function updateTodo(params: UpdateTodoParams): Promise<Todo> {
  const response = await todoApi.updateTodo(params);
  return mapTodoWithAppAtributes(response, 0);
}

async function createTodo(params: CreateTodoParams): Promise<void> {
  await todoApi.createTodo(params);
}

async function deleteTodo(id: string): Promise<void> {
  await todoApi.deleteTodo(id);
}

/**
 * If this function is called in any different function of getTodoList, it means that the todo already have a order, so the index passed can be any value
 */
function mapTodoWithAppAtributes(data: TodoItemApi, index: number): Todo {
  const base = todoAdapter.toTodo(data);
  const existingTodos = store.getState().todo.todos;
  const concludedTodos = store.getState().todo.concludedTodos;

  const completed = concludedTodos.some(
    concludedTodo => concludedTodo.id === data.id,
  );

  const existingTodo = existingTodos.find(t => t.id === data.id);

  return {
    ...base,
    completed,
    order: existingTodo?.order ?? index,
  };
}

/**
 * Synchronizes all persistent storage data with API data.
 * Removes all that have been deleted from the API, keeping the local state up to date.
 */
async function syncTodosAndUpdateStore(
  currentTodoList: Todo[],
): Promise<Todo[]> {
  const raw = await MMKVStorage.getItem("persist:root");
  if (!raw) {
    return currentTodoList;
  }

  const rootState = JSON.parse(raw);
  const persistedTodoState = JSON.parse(rootState.todo);
  const storedTodos: Todo[] = persistedTodoState.todos || [];

  const currentTodoIds = new Set(currentTodoList.map(todo => todo.id));

  const updatedStoredTodos = storedTodos.filter(todo =>
    currentTodoIds.has(todo.id),
  );

  const newPersistedTodoState = {
    ...persistedTodoState,
    todos: updatedStoredTodos,
  };

  const newPersistRoot = {
    ...rootState,
    todo: JSON.stringify(newPersistedTodoState),
  };

  await MMKVStorage.setItem("persist:root", JSON.stringify(newPersistRoot));

  return currentTodoList;
}

export const todoService = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoList,
  getTodoById,
};
