import {useEffect} from "react";

import {todoService} from "@domain";
import {setTodoList, setIsError, setIsLoading, useAppDispatch} from "@features";

export function useTodoGetList() {
  const dispatch = useAppDispatch();

  async function fetchTodos() {
    dispatch(setIsError(false));
    setIsLoading(true);
    try {
      const response = await todoService.getTodoList();
      dispatch(setTodoList(response));
    } catch (err) {
      dispatch(setIsError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return {
    fetchTodos,
  };
}
