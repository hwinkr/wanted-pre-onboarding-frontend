import React, {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useState,
} from 'react';
import { styled } from 'styled-components';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type: 'email' | 'password' | 'text';
  testId?: string;
  initValue?: string;
}

const Input = ({
  type,
  initValue = '',
  testId,
  ...props
}: InputProps): [
  string,
  React.ReactElement<HTMLInputElement>,
  Dispatch<SetStateAction<string>>,
] => {
  const [value, setValue] = useState(initValue);
  const input = (
    <StyledInput
      data-testid={testId}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
  return [value, input, setValue];
};

export const useInput = (props: Parameters<typeof Input>[0]) =>
  Input({ ...props });

export default Input;

const StyledInput = styled.input`
  padding: 10px;
  width: 20em;
  border: 0;
  border-bottom: 2px solid black;
  outline: none;
  background-color: #f0f0f0;

  &:focus {
    border-bottom: 2px solid #3498db;
  }

  &::placeholder {
    color: #808080;
    font-weight: bold;
  }
`;
