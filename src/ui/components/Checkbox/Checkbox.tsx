import { useId } from 'react';

import { Styles } from './Checkbox.styles';

import type { CheckboxProps } from './@types/Checkbox.types';

export const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  const id = useId();

  return (
    <Styles.Container>
      <Styles.Checkbox id={id} type="checkbox" {...rest} />
      <label htmlFor={id}>{label}</label>
    </Styles.Container>
  );
};
