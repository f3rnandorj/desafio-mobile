import {Todo, TodoItemApi} from ".";

function toTodo(todo: TodoItemApi): Omit<Todo, "completed" | "order"> {
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description,
  };
}

export const todoAdapter = {
  toTodo,
};
