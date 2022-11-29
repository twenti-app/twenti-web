import { Styles } from './Button.styles';

import type { ButtonProps } from './@types/Button.types';

export const Button = ({ appearance = 'primary', children, className, status, disabled, ...rest }: ButtonProps) => {
  return (
    <Styles.Button appearance={appearance} className={`${className} ${appearance} ${status}`} disabled={disabled || status === 'disabled'} {...rest}>
      <Styles.Indicator className="icon loader-icon" />
      <Styles.Indicator className="icon success-icon" />
      <Styles.Indicator className="icon error-icon" />
      <Styles.Text>{children}</Styles.Text>
    </Styles.Button>
  );
};
