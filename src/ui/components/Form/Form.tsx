import { FormEvent, Fragment, HTMLProps, ReactNode, Suspense } from 'react';
import { Await } from 'react-router-dom';

import { Styles } from './Form.styles';

import { Button } from '../Button';

interface FormProps extends HTMLProps<HTMLFormElement> {
  footer?: ReactNode;
  title?: string;
  onClickSubmit?: (values: { [k: string]: FormDataEntryValue }) => Promise<void>;
}

export const Form = ({ children, footer, title, onClickSubmit, ...rest }: FormProps) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    await onClickSubmit?.(values);
  };

  return (
    <Fragment>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Form onSubmit={handleSubmit}>
        {children}
        <Suspense fallback={<Button status="pending">Submit</Button>}>
          <Await errorElement={<Button status="error">Submit</Button>} resolve={handleSubmit}>
            <Button type="submit">Submit</Button>
          </Await>
        </Suspense>
      </Styles.Form>
      <footer>
        <p>{footer}</p>
      </footer>
    </Fragment>
  );
};
