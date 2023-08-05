import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  console.log(1);
  return <>{children}</>;
};

export default AuthLayout;
