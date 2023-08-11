import React, { useState } from 'react';
import { useInput } from '../Input';
import TEST_ID from '../../constants/test-id';
import { styled } from 'styled-components';
import Button from '../Button';
import { inputValidator } from '../../utils';

interface AuthFormProps {
  title: string;
  buttonMessage: string;
  getSubmitHandler: (
    email: string,
    password: string,
  ) => (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const AuthForm = ({
  title,
  buttonMessage,
  getSubmitHandler,
}: AuthFormProps) => {
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [emailFocus, setEmailFocus] = useState<boolean>(false);

  const [email, emailInput] = useInput({
    type: 'email',
    testId: TEST_ID.INPUT.EMAIL,
    id: 'user-email',
    placeholder: '이메일을 입력해주세요.',
    onFocus: () => setEmailFocus((prev) => !prev),
    onBlur: () => setEmailFocus((prev) => !prev),
  });
  const [password, passwordInput] = useInput({
    type: 'password',
    testId: TEST_ID.INPUT.PASSWORD,
    id: 'user-password',
    placeholder: '비밀번호를 8글자 이상 입력해주세요.',
    onFocus: () => setPasswordFocus((prev) => !prev),
    onBlur: () => setPasswordFocus((prev) => !prev),
  });

  const emailValidator = (email: string) => email.includes('@');
  const formButtonValidator = (
    validatedEmail: boolean,
    validatedPassword: boolean,
  ) => validatedEmail && validatedPassword;

  const submitHandler = () => getSubmitHandler(email, password);

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={submitHandler()}>
        <InputBox>
          {emailInput}
          {emailFocus && !emailValidator(email) && (
            <span>이메일 형식에 @이 포함되어야 합니다.</span>
          )}
        </InputBox>
        <InputBox>
          {passwordInput}
          {passwordFocus && !inputValidator(password, 8, 'over') && (
            <span>
              비밀번호는 8글자 이상이어야 합니다. ({password.length} / 8)
            </span>
          )}
        </InputBox>
        <Button
          testId="signup-button"
          disabled={
            !formButtonValidator(
              emailValidator(email),
              inputValidator(password, 8, 'over'),
            )
          }
          onClick={() => submitHandler()}
        >
          {buttonMessage}
        </Button>
      </Form>
    </Container>
  );
};

export default AuthForm;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 3em;
`;

const InputBox = styled.div`
  height: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 12px;
    color: #71bc5c;
  }
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 30px;

  input {
    margin: 10px;
  }

  Button {
    margin-top: 10px;
  }
`;
