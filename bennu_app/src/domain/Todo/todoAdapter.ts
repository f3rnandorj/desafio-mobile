import {Todo, TodoApiItem} from ".";

function toTodo(todo: TodoApiItem): Omit<Todo, "completed"> {
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description,
  };
}

export const todoAdapter = {
  toTodo,
};
