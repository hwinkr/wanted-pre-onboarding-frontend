import React, { ReactNode } from 'react';
import GlobalStyle from '../Global/global';
import styled from 'styled-components';

interface GlobalStyleProps {
  children: ReactNode;
}

const GlobalStyleProvider = ({ children }: GlobalStyleProps) => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>{children}</AppContainer>
    </>
  );
};

export default GlobalStyleProvider;

const AppContainer = styled.div`
  height: 70vh;
  width: 50vw;

  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 10px;

  background-color: #f0f0f0;
`;
