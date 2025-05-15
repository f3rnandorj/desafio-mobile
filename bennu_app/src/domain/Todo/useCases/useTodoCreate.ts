import {MutationOptions} from "@api";

import {CreateTodoParams, todoService} from "@domain";
import {setIsError, setIsLoading, useAppDispatch} from "@features";

export function useTodoCreate(options?: MutationOptions<void>) {
  const dispatch = useAppDispatch();

  async function createTodo(todo: CreateTodoParams) {
    dispatch(setIsError(false));
    dispatch(setIsLoading(true));

    try {
      await todoService.createTodo(todo);

      if (options?.onSuccess) {
        options.onSuccess();
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
    createTodo,
  };
}
