import { Styles } from './Input.styles';

import type { InputProps } from './@types/Input.types';

export const Input = ({ status, readOnly, className, ...rest }: InputProps) => {
  return <Styles.Input className={`${className} ${status}`} readOnly={readOnly || status === 'pending'} {...rest} />;
};
