import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import {Todo} from "@domain";

interface ConcludedTodoState {
  concludedTodos: Todo[];
}

const initialState: ConcludedTodoState = {
  concludedTodos: [],
};

const concludedTodoSlice = createSlice({
  name: "concludedTodo",
  initialState,
  reducers: {
    addCompletedTodo(state, action: PayloadAction<Todo>) {
      state.concludedTodos.push(action.payload);
    },
    removeCompletedTodo(state, action: PayloadAction<number>) {
      state.concludedTodos = state.concludedTodos.filter(
        todoId => todoId.id !== action.payload,
      );
    },
  },
});

export const {addCompletedTodo, removeCompletedTodo} =
  concludedTodoSlice.actions;

export default concludedTodoSlice.reducer;
