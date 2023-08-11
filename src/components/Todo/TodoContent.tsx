import React from 'react';
import Button from '../Button';
import { deleteTodo } from '../../apis/todo';
import useTodo from '../../hooks/useTodo';
import TEST_ID from '../../constants/test-id';
import { styled } from 'styled-components';

interface TodoContentProps {
  todo: string;
  id: number;
  setIsEdited: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoContent = ({ todo, id, setIsEdited }: TodoContentProps) => {
  const { getTodoList } = useTodo();
  const todoDeleteHandler = async () => {
    alert('정말 삭제하시겠습니까?');
    const deleteTodoResult = await deleteTodo(id);
    if (deleteTodoResult) {
      alert(deleteTodoResult);
      return;
    }
    getTodoList();
  };

  return (
    <ContentContainer>
      <span>{todo}</span>
      <ButtonContainer>
        <Button
          testId={TEST_ID.BUTTON.MODIFY_TODO}
          onClick={() => setIsEdited((prev) => !prev)}
        >
          수정
        </Button>
        <Button testId={TEST_ID.BUTTON.DELETE_TODO} onClick={todoDeleteHandler}>
          삭제
        </Button>
      </ButtonContainer>
    </ContentContainer>
  );
};

export default TodoContent;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: bold;
    margin-left: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  Button:nth-child(2) {
    margin-left: 10px;
  }
`;
