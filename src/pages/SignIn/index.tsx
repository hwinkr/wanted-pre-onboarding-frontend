import { useState } from 'react';
import { useInput } from '../../components/Input';
import signIn from '../../apis/auth/sign-in';
import Button from '../../components/Button';
import { styled } from 'styled-components';
import useRouter from '../../hooks/useRouter';
import { AxiosResponse } from 'axios';
import { setTokenToLocalStorage } from '../../apis/token';

const SignIn = () => {
  const { routerTo } = useRouter();
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [emailFocus, setEmailFocus] = useState<boolean>(false);

  const [email, emailInput] = useInput({
    type: 'email',
    testId: 'email-input',
    id: 'user-email',
    placeholder: '이메일을 입력해주세요.',
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

  const signInHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const signInResult: AxiosResponse['data'] = await signIn(email, password);
    if (!signInResult) {
      alert(
        '로그인에 실패했어요! 이메일과 패스워드를 다시 한번 확인해주세요. :)',
      );
      return;
    }

    const accessToken = signInResult.access_token;
    setTokenToLocalStorage(accessToken);
    alert('로그인 성공! 투두 리스트 페이지로 이동합니다.');
    routerTo('/todo');
  };

  return (
    <FormContainer onSubmit={signInHandler}>
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
      <Button disabled={!buttonActiveHandler()} onClick={() => signInHandler}>
        로그인
      </Button>
    </FormContainer>
  );
};

export default SignIn;

const InputLabel = styled.label``;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
