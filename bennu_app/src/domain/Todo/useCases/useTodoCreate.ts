import {MutationOptions} from "@api";

import {CreateTodoParams, todoService} from "@domain";
import {setIsLoading, useAppDispatch} from "@features";

export function useTodoCreate(options?: MutationOptions<void>) {
  const dispatch = useAppDispatch();

  async function createTodo(todo: CreateTodoParams) {
    dispatch(setIsLoading(true));

    try {
      await todoService.createTodo(todo);

      if (options?.onSuccess) {
        options.onSuccess();
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
    createTodo,
  };
}
