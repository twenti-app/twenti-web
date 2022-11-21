import { Fragment, Suspense } from 'react';
import { Await } from 'react-router-dom';

import { Styles } from './Form.styles';

import { Button } from 'ui/components/Button';

import type { FormEvent } from 'react';
import type { FormProps } from './@types/Form.types';

export const Form = ({ children, title, onClickSubmit }: FormProps) => {
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
        <Styles.Footer>
          <Suspense fallback={<Button status="pending">Submit</Button>}>
            <Await errorElement={<Button status="error">Submit</Button>} resolve={handleSubmit}>
              <Button type="submit">Submit</Button>
            </Await>
          </Suspense>
        </Styles.Footer>
      </Styles.Form>
    </Fragment>
  );
};
