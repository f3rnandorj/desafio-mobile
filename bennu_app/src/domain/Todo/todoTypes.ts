export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  description?: string;
}

export interface TodoItemApi {
  id: string;
  title: string;
  description?: string;
}
export interface TodoApi {
  tasks: TodoItemApi[];
}

export interface CreateTodoParams {
  title: string;
  description?: string;
}

export interface UpdateTodoParams {
  id: string;
  title: string;
  description?: string;
}
