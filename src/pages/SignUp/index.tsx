import React, { useState } from 'react';
import { useInput } from '../../components/Input';
import { styled } from 'styled-components';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../apis/auth';

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [emailFocus, setEmailFocus] = useState<boolean>(false);

  const [email, emailInput] = useInput({
    type: 'email',
    testId: 'email-input',
    id: 'user-email',
    placeholder: '이메일을 입력해주세요.',
    autoFocus: true,
    onFocus: () => setEmailFocus((prev) => !prev),
    onBlur: () => setEmailFocus((prev) => !prev),
  });
  const [password, passwordInput] = useInput({
    type: 'password',
    testId: 'password-input',
    id: 'user-password',
    placeholder: '비밀번호를 8글자 이상 입력해주세요.',
    onFocus: () => setPasswordFocus((prev) => !prev),
    onBlur: () => setPasswordFocus((prev) => !prev),
  });
  const passwordValidator = (pwd: string) => pwd.length >= 8;
  const emailValodator = (email: string) => email.includes('@');
  const buttonActiveHandler = () =>
    emailValodator(email) && passwordValidator(password);

  const signupHanlder: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const signupResult = await signup(email, password);
    if (signupResult !== 201) {
      alert(
        '동일한 이메일이 이미 존재하거나 서버에 문제가 발생했어요! 이메일을 다시한번 확인하고 잠시 후 다시 요청해주세요',
      );
      return;
    }
    alert('회원가입 성공! 로그인 페이지로 이동합니다.');
    navigate('/signin');
  };

  return (
    <FormContainer onSubmit={signupHanlder}>
      <InputLabel htmlFor="user-email">이메일</InputLabel>
      {emailInput}
      {emailFocus && !emailValodator(email) && (
        <span>이메일 형식에 @이 포함되어야 합니다.</span>
      )}
      <InputLabel htmlFor="user-password">비밀번호</InputLabel>
      {passwordInput}
      {passwordFocus && !passwordValidator(password) && (
        <span>비밀번호는 8글자 이상이어야 합니다. ({password.length} / 8)</span>
      )}
      <Button disabled={!buttonActiveHandler()} onClick={() => signupHanlder}>
        회원가입
      </Button>
    </FormContainer>
  );
};

export default SignUp;

const InputLabel = styled.label``;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
