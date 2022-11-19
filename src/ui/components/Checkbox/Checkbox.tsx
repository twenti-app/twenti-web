import type { ChangeEvent } from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return <input checked={checked} onChange={onChange} type="checkbox" />;
};
