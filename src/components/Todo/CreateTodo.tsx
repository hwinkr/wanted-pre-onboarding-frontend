import React from 'react';
import { useInput } from '../Input';
import { styled } from 'styled-components';
import Button from '../Button';
import { postTodo } from '../../apis/todo';
import TEST_ID from '../../constants/test-id';
import { inputValidator } from '../../utils';

interface CreateTodoProps {
  getTodoList: () => void;
}

const CreateTodo = ({ getTodoList }: CreateTodoProps) => {
  const [todo, todoInput, setTodo] = useInput({
    type: 'text',
    testId: TEST_ID.INPUT.NEW_TODO,
    id: 'new-todo',
    placeholder: '새로운 할 일을 1글자 이상 입력해주세요.',
  });

  const todoSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();
    if (!confirm('이 내용으로 추가 할까요?')) return;

    const postTodoResult = await postTodo(todo);
    if (postTodoResult) {
      alert(postMessage);
    }
    alert('입력 성공!');
    getTodoList();
    setTodo('');
  };

  return (
    <FormContainer>
      <Form onSubmit={todoSubmitHandler}>
        {todoInput}
        <Button
          testId={TEST_ID.BUTTON.NEW_TODO}
          disabled={!inputValidator(todo, 1, 'over')}
          onClick={() => todoSubmitHandler}
        >
          추가
        </Button>
      </Form>
    </FormContainer>
  );
};

export default CreateTodo;

const FormContainer = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
`;
