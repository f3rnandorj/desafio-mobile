export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  description?: string;
}

export interface TodoApi {
  id: string;
  title: string;
  description?: string;
}
