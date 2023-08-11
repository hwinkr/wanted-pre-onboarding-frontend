import React, { useEffect, useMemo } from 'react';
import { CreateTodo, TodoList } from '../../components/Todo';
import useTodo from '../../hooks/useTodo';

const Todo = () => {
  const { todos, getTodoList } = useTodo();
  useEffect(() => {
    getTodoList();
  }, []);

  const props = useMemo(
    () => ({
      todos,
      getTodoList,
    }),
    [todos, getTodoList],
  );

  return (
    <>
      <CreateTodo getTodoList={props.getTodoList} />
      <TodoList todos={props.todos} />
    </>
  );
};

export default Todo;
