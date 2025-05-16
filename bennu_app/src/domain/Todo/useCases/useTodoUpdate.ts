import {MutationOptions} from "@api";

import {setIsLoading, useAppDispatch} from "@features";

import {Todo, UpdateTodoParams, todoService} from "..";

export function useTodoUpdate(options?: MutationOptions<Todo>) {
  const dispatch = useAppDispatch();

  async function updateTodo(todo: UpdateTodoParams) {
    dispatch(setIsLoading(true));

    try {
      const updatedTodo = await todoService.updateTodo(todo);

      if (options?.onSuccess) {
        options.onSuccess(updatedTodo);
      }
    } catch (err: any) {
      if (options?.onError) {
        options.onError(err.message);
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  return {
    updateTodo,
  };
}
