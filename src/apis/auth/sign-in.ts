import http from '../http';

const signIn = async (email: string, password: string) => {
  const signInResult = await http.post('/auth/signin', {
    email,
    password,
  });

  return signInResult.data;
};

export default signIn;
