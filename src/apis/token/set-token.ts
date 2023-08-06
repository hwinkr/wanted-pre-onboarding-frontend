import getTokenFromLocalStorage from './get-token';

const setTokenToLocalStorage = (token: string) => {
  if (getTokenFromLocalStorage()) {
    return;
  }
  localStorage.setItem('token', token);
};

export default setTokenToLocalStorage;
