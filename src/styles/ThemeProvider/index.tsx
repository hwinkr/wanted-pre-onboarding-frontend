import React, { ReactNode } from 'react';
import GlobalStyle from '../Global/global';

interface ThemeProviderProps {
  children: ReactNode;
}

// TODO
// 1. 앱 내부에서 사용할 THEME 색 설정 후, 적용하기

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default ThemeProvider;
