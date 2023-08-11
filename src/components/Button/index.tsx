import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  testId?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = ({ children, testId, disabled, ...props }: ButtonProps) => {
  return (
    <StyledButton data-testid={testId} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 7px;
  width: 5em;
  border-radius: 10px;

  background-color: #71bc5c;
  color: #ffffff;

  &:disabled {
    background-color: #cccccc;
    color: #808080;
    background-color: #e7e7e7;
  }

  cursor: pointer;
`;
