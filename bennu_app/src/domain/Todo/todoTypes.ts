export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
}

export interface TodoItemApi {
  id: number;
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
  id: number;
  title: string;
  description?: string;
}
