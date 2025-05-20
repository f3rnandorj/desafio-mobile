export interface TodoAppAtributes {
  completed: boolean;
  order: number;
}
export interface Todo extends TodoAppAtributes {
  id: string;
  title: string;
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
