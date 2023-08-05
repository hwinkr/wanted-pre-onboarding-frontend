import http from '../http';

const signup = async (email: string, password: string) => {
  const signupResult = await http.post(
    '/auth/signup',
    {
      email,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return signupResult.status;
};

export default signup;
