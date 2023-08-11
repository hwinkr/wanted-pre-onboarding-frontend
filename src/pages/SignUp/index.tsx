import React from 'react';
import signUp from '../../apis/auth/sign-up';
import { useRouter } from '../../hooks';
import AuthForm from '../../components/AuthForm';

const SignUp = () => {
  const { routerTo } = useRouter();

  const signUpHandler =
    (email: string, password: string) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const signupResult = await signUp(email, password);
      if (signupResult !== 201) {
        alert(
          '동일한 이메일이 이미 존재하거나 서버에 문제가 발생했어요! 이메일을 다시한번 확인하고 잠시 후 다시 요청해주세요',
        );
        return;
      }
      alert('회원가입 성공! 로그인 페이지로 이동합니다.');
      routerTo('/signin');
    };

  return (
    <AuthForm
      title="회원가입"
      buttonMessage="회원가입"
      getSubmitHandler={signUpHandler}
    />
  );
};

export default SignUp;
