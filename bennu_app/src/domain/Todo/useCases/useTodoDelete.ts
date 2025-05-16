import {MutationOptions} from "@api";

import {setIsLoading, useAppDispatch} from "@features";

import {todoService} from "..";

export function useTodoDelete(options?: MutationOptions<void>) {
  const dispatch = useAppDispatch();

  async function deleteTodo(todoId: number) {
    dispatch(setIsLoading(true));

    try {
      await todoService.deleteTodo(todoId);

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
    deleteTodo,
  };
}
