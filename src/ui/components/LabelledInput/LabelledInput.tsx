import { useId } from 'react';

import { Styles } from './LabelledInput.styles';

import { Input } from 'ui/components/Input';

import type { LabelledInputProps } from './@types/LabelledInput.types';

export const LabelledInput = ({ label, ...rest }: LabelledInputProps) => {
  const id = useId();

  return (
    <Styles.Wrapper>
      <Styles.Label htmlFor={id}>{label}</Styles.Label>
      <Input id={id} {...rest} />
    </Styles.Wrapper>
  );
};
