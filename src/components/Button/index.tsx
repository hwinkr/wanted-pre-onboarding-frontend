import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = ({ children, disabled, ...props }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: green;
  &:disabled {
    background-color: gray;
  }
`;
