import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputStatus = 'disabled' | 'error' | 'idle' | 'pending' | 'success';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  action?: ReactNode;
  icon?: ReactNode;
  label?: string;
  message?: string;
  status?: InputStatus;
}
