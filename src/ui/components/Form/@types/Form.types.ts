import type { FormEvent, HTMLProps } from 'react';

export interface FormProps extends HTMLProps<HTMLFormElement> {
  title?: string;
  onClickSubmit?: (values: { [k: string]: FormDataEntryValue }) => Promise<void>;
}
