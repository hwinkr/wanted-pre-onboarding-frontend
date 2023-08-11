import signIn from '../../apis/auth/sign-in';
import useRouter from '../../hooks/useRouter';
import { AxiosResponse } from 'axios';
import { setTokenToLocalStorage } from '../../apis/token';

import AuthForm from '../../components/AuthForm';

/*
{
"email": "qweasdzxc!1234@naver.com",
"password": "qweasdzxc"
}
*/

const SignIn = () => {
  const { routerTo } = useRouter();
  const signInHandler =
    (email: string, password: string) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
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
    <AuthForm
      title="로그인"
      buttonMessage="로그인"
      getSubmitHandler={signInHandler}
    />
  );
};

export default SignIn;
