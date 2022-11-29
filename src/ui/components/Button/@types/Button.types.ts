import type { ButtonHTMLAttributes } from 'react';

export type ButtonAppearance = 'primary' | 'secondary' | 'default' | 'light' | 'bright';

export type ButtonStatus = 'disabled' | 'error' | 'pending' | 'success';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance;
  status?: ButtonStatus;
}
