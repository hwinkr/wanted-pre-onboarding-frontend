import React from 'react';
import useRouter from '../../hooks/useRouter';
import { Navigate, Outlet } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../apis/token';

const AuthLayout = () => {
  const { current } = useRouter();

  if (current === '/todo' && !getTokenFromLocalStorage()) {
    alert('로그인 토큰이 발급되지 않았어요! 로그인 후 이용해주세요');
    return <Navigate to="/signin" />;
  }
  if (
    (current === '/signin' || current === '/signup') &&
    getTokenFromLocalStorage()
  ) {
    alert('현재 로그인 토큰이 발급되어 있어요! 투두 리스트 페이지로 이동해요.');
    return <Navigate to="/todo" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
