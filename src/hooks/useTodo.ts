import { useContext } from 'react';
import TodoContext from '../context/todo';

const useTodo = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("todoContext doesn't exist");
  }

  const { todos, getTodoList } = todoContext;
  return {
    todos,
    getTodoList,
  };
};

export default useTodo;
