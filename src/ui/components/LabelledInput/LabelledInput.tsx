import { useId } from 'react';

import { Styles } from './LabelledInput.styles';

export interface LabelledInputProps {
  label?: string;
  value?: string;
}

export const LabelledInput = ({ label, value }: LabelledInputProps) => {
  const id = useId();

  return (
    <Styles.Wrapper>
      <Styles.Label htmlFor={id}>{label}</Styles.Label>
      <input id={id} value={value} />
    </Styles.Wrapper>
  );
};
