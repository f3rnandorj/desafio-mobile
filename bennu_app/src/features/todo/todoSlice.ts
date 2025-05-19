import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {Todo} from "@domain";

interface TodoState {
  todos: Todo[];
  concludedTodos: Todo[];
  isLoading: boolean;
  isGetListError: boolean;
}

const initialState: TodoState = {
  todos: [],
  concludedTodos: [],
  isLoading: false,
  isGetListError: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo(state, action: PayloadAction<Todo>) {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsGetTodoListError(state, action: PayloadAction<boolean>) {
      state.isGetListError = action.payload;
    },
    addCompletedTodo(state, action: PayloadAction<Todo>) {
      state.concludedTodos.push(action.payload);
    },
    removeCompletedTodo(state, action: PayloadAction<string>) {
      state.concludedTodos = state.concludedTodos.filter(
        todoId => todoId.id !== action.payload,
      );
    },
  },
});

export const {
  setTodoList,
  addTodo,
  removeTodo,
  updateTodo,
  setIsLoading,
  setIsGetTodoListError,
  addCompletedTodo,
  removeCompletedTodo,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
