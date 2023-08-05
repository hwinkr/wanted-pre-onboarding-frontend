import React, { InputHTMLAttributes, useState } from 'react';
import { styled } from 'styled-components';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type: 'email' | 'password';
  testId: string;
  initValue?: any;
}

// TODO
// 1. 현재 로그인, 회원가입에서만 Input 컴포넌트가 사용되고 이메일, 패스워드 타입만 존재하기 떄문에 이를 활용해서 타입을 제한한다.

const Input = ({ type, initValue = '', testId, ...props }: InputProps) => {
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
  return [value, input];
};

export const useInput = (props: Parameters<typeof Input>[0]) =>
  Input({ ...props });

export default Input;

const StyledInput = styled.input``;
