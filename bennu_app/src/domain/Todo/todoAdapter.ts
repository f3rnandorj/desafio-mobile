import {Todo, TodoApi} from ".";

function toTodo(todo: TodoApi): Omit<Todo, "completed"> {
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description,
  };
}

export const todoAdapter = {
  toTodo,
};
