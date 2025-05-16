import {MutationOptions} from "@api";

import {setIsError, setIsLoading, useAppDispatch} from "@features";

import {Todo, UpdateTodoParams, todoService} from "..";

export function useTodoUpdate(options?: MutationOptions<Todo>) {
  const dispatch = useAppDispatch();

  async function updateTodo(todo: UpdateTodoParams) {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));

    try {
      const updatedTodo = await todoService.updateTodo(todo);

      if (options?.onSuccess) {
        options.onSuccess(updatedTodo);
      }
    } catch (err: any) {
      dispatch(setIsError(true));

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
