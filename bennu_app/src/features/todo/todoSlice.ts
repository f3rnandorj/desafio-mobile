import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {Todo} from "@domain";

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  isGetListError: boolean;
}

const initialState: TodoState = {
  todos: [],
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
    removeTodo(state, action: PayloadAction<number>) {
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
  },
});

export const {
  setTodoList,
  addTodo,
  removeTodo,
  updateTodo,
  setIsLoading,
  setIsGetTodoListError,
} = todoSlice.actions;

export default todoSlice.reducer;
