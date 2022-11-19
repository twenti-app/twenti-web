import type { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: InputProps) => {
  return <input {...rest} />;
};
