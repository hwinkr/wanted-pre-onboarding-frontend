import React, { useCallback, useState } from 'react';
import { TodoItem } from '../../types/todo-item';
import { getTodos } from '../../apis/todo';
import TodoContext from '../../context/todo';
import { Outlet } from 'react-router-dom';

const TodoProvider = () => {
  const [todos, setTodos] = useState<TodoItem[] | null>(null);

  const getTodoList = useCallback(async () => {
    setTodos(await getTodos());
  }, [setTodos]);

  return (
    <TodoContext.Provider value={{ todos, getTodoList }}>
      <Outlet />
    </TodoContext.Provider>
  );
};

export default TodoProvider;
