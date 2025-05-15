import {create} from "zustand";
import {persist} from "zustand/middleware";

import {storage} from "../storage";

import {ConcludedTodoService} from "./concludedTodoTypes";

export const concludedTodoService = create<ConcludedTodoService>()(
  persist(
    (set, get) => ({
      concludedTodoList: [],

      addTodo: todo => {
        const todoList = get().concludedTodoList;

        const todoExist = todoList.find(item => item.id === todo.id);
        if (!todoExist) {
          const updatedList = [...todoList, todo];
          set({concludedTodoList: updatedList});
        }
      },

      removeTodo: todoId => {
        const todoList = get().concludedTodoList;
        const updatedList = todoList.filter(todo => todo.id !== todoId);
        set({concludedTodoList: updatedList});
      },

      clearConcludedTodoList: () => {
        set({concludedTodoList: []});
      },
    }),
    {
      name: "@ConcludedTodo",
      storage: storage,
    },
  ),
);

export function useConcludedTodo(): ConcludedTodoService["concludedTodoList"] {
  const todoList = concludedTodoService(state => state.concludedTodoList);
  return todoList;
}

export function useConcludedTodoService(): Omit<
  ConcludedTodoService,
  "concludedTodoList"
> {
  const addTodo = concludedTodoService(state => state.addTodo);
  const removeTodo = concludedTodoService(state => state.removeTodo);
  const clearConcludedTodoList = concludedTodoService(
    state => state.clearConcludedTodoList,
  );

  return {
    addTodo,
    removeTodo,
    clearConcludedTodoList,
  };
}
