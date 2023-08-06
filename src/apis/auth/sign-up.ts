import http from '../http';

// 로그인에 성공했을 경우, Response Body에 JWT토큰을 포함한다.

const signUp = async (email: string, password: string) => {
  const signUpResult = await http.post('/auth/signup', {
    email,
    password,
  });

  console.log(signUpResult.data);

  return signUpResult.status;
};

export default signUp;
