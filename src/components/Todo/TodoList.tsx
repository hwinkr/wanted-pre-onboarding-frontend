import React from 'react';
import { TodoItem } from '../../types/todo-item';
import TodoElement from './TodoElement';
import { styled } from 'styled-components';

interface TodoListProps {
  todos: TodoItem[] | null;
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      {todos && (
        <TodoContainer>
          {todos.map((todo) => (
            <TodoElement
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
            />
          ))}
        </TodoContainer>
      )}
    </>
  );
};

export default TodoList;

const TodoContainer = styled.ul`
  padding: 10px;
  height: 80%;
  overflow-x: scroll;
  overflow-y: scroll;
`;
