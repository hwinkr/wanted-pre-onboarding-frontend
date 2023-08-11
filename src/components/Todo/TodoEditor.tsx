import React from 'react';
import { useTodo } from '../../hooks';
import { useInput } from '../Input';
import Button from '../Button';
import { putTodo } from '../../apis/todo';
import { styled } from 'styled-components';
import TEST_ID from '../../constants/test-id';
import { inputValidator } from '../../utils';

interface TodoEditorProps {
  prevTodo: string;
  id: number;
  isCompleted: boolean;
  setIsEdited: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoEditor = ({
  prevTodo,
  id,
  isCompleted,
  setIsEdited,
}: TodoEditorProps) => {
  const { getTodoList } = useTodo();
  const [editedTodo, editedTodoInput] = useInput({
    type: 'text',
    testId: TEST_ID.INPUT.MODIFY_TODO,
    initValue: prevTodo,
    autoFocus: true,
    placeholder: '수정된 할 일을 1글자 이상 입력해주세요.',
  });

  const editTodoHandler = async () => {
    if (prevTodo === editedTodo) {
      alert('투 두를 수정해주세요!');
      return;
    }

    if (!confirm('이 내용으로 수정 할까요?')) return;

    const editTodoResult = await putTodo(id, editedTodo, isCompleted);
    if (editTodoResult) {
      alert(editTodoResult);
      return;
    }
    alert('수정 성공!');
    setIsEdited((prev) => !prev);
    getTodoList();
  };

  return (
    <EditorContainer>
      {editedTodoInput}
      <ButtonContainer>
        <Button
          testId={TEST_ID.BUTTON.MODIFY_SUBMIT}
          onClick={editTodoHandler}
          disabled={!inputValidator(editedTodo, 1, 'over')}
        >
          제출
        </Button>
        <Button
          testId={TEST_ID.BUTTON.MODIFY_CANCEL}
          onClick={() => setIsEdited((prev) => !prev)}
        >
          취소
        </Button>
      </ButtonContainer>
    </EditorContainer>
  );
};

export default TodoEditor;

const EditorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  Button:nth-child(2) {
    margin-left: 10px;
  }
`;
