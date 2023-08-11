import React, { useState } from 'react';
import styled from 'styled-components';
import { putTodo } from '../../apis/todo';
import TodoEditor from './TodoEditor';
import { TodoContent } from '.';

interface TodoElementProps {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const TodoElement = ({ id, todo, isCompleted }: TodoElementProps) => {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [isEnded, setIsEnded] = useState<boolean>(isCompleted);

  const todoCompleteHandler = async () => {
    const changedTodoStatus = !isEnded;
    const putTodoResult = await putTodo(id, todo, changedTodoStatus);
    if (putTodoResult) {
      alert(putTodoResult);
      return;
    }
    setIsEnded((prev) => !prev);
  };

  return (
    <TodoContainer>
      <input
        type="checkbox"
        defaultChecked={isEnded}
        onClick={todoCompleteHandler}
      />
      {isEdited ? (
        <TodoEditor
          id={id}
          prevTodo={todo}
          setIsEdited={setIsEdited}
          isCompleted={isCompleted}
        />
      ) : (
        <TodoContent id={id} todo={todo} setIsEdited={setIsEdited} />
      )}
    </TodoContainer>
  );
};

export default TodoElement;

const TodoContainer = styled.li`
  display: flex;
  align-items: center;
  height: 2em;
  padding: 10px;
`;
