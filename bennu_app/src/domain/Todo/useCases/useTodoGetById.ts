import {useEffect, useState} from "react";

import {setIsLoading, useAppDispatch} from "@features";

import {Todo, todoService} from "..";

interface Props {
  todoId: string;
  enabled?: boolean;
}

export function useTodoGetById({todoId, enabled = false}: Props) {
  const [todo, setTodo] = useState<Todo>();
  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();

  async function getTodo() {
    dispatch(setIsLoading(true));

    try {
      const response = await todoService.getTodoById(todoId);
      setTodo(response);
    } catch (err) {
      setIsError(true);
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  useEffect(() => {
    if (enabled) {
      getTodo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return {
    todo,
    isError,
    getTodo,
  };
}
