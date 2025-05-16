import {useEffect} from "react";

import {todoService} from "@domain";
import {
  setTodoList,
  setIsGetTodoListError,
  setIsLoading,
  useAppDispatch,
} from "@features";

interface Props {
  enabled?: boolean;
}

export function useTodoGetList({enabled = false}: Props) {
  const dispatch = useAppDispatch();

  async function fetchTodos() {
    dispatch(setIsGetTodoListError(false));
    dispatch(setIsLoading(true));

    try {
      const response = await todoService.getTodoList();
      dispatch(setTodoList(response));
    } catch (err) {
      dispatch(setIsGetTodoListError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  useEffect(() => {
    if (enabled) {
      fetchTodos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return {
    fetchTodos,
  };
}
