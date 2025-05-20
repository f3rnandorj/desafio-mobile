import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";

import {Todo} from "@domain";
import {reorderTodo, useAppDispatch, useAppSelector} from "@features";

import {EmptyTodoList} from "./components/EmptyTodoList";
import {TodoItem} from "./components/TodoItem";

interface Props {
  todos: Todo[];
}

export function TodoList({todos}: Props) {
  const dispatch = useAppDispatch();
  const {isGetListError, isLoading} = useAppSelector(state => state.todo);

  function handleDragEnd({data: newData}: {data: Todo[]}) {
    newData.forEach((todo, index) => {
      dispatch(reorderTodo({id: todo.id, newIndex: index}));
    });
  }

  function renderItem({item, drag}: RenderItemParams<Todo>) {
    return (
      <ScaleDecorator activeScale={0.92}>
        <TodoItem todo={item} onLongPress={drag} />
      </ScaleDecorator>
    );
  }

  if (isGetListError || todos.length === 0 || isLoading) {
    return <EmptyTodoList />;
  }

  const sortedTodos = [...todos].sort((a, b) => a.order - b.order);
  const concludedTodos = sortedTodos.filter(todo => todo.completed);
  const unconcludedTodos = sortedTodos.filter(todo => !todo.completed);

  return (
    <DraggableFlatList
      data={[...unconcludedTodos, ...concludedTodos]}
      keyExtractor={item => String(item.id)}
      renderItem={renderItem}
      onDragEnd={handleDragEnd}
      contentContainerStyle={
        todos.length === 0
          ? {flex: 1, justifyContent: "center", alignItems: "center"}
          : {}
      }
    />
  );
}
