export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  description?: string;
}

export interface TodoApiItem {
  id: string;
  title: string;
  description?: string;
}
export interface TodoApi {
  tasks: TodoApiItem[];
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
