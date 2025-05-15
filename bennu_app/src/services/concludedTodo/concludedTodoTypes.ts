import {Todo} from "@domain";

export type ConcludedTodoService = {
  concludedTodoList: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (todoId: Todo["id"]) => void;
  clearConcludedTodoList: () => void;
};
