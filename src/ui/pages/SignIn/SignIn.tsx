import { Fragment } from 'react';

import { Styles } from './SignIn.styles';

import { routes } from 'configuration/routes';

import { Banner } from 'ui/components/Banner';
import { Form } from 'ui/components/Form';
import { LabelledInput } from 'ui/components/LabelledInput';
import { Link } from 'ui/components/Link';
import { Logo } from 'ui/components/Logo';

export const SignIn = () => {
  const renderFooter = () => (
    <Fragment>
      Don't have an account? <Link to={routes.ACCESS_REQUEST}>Sign up</Link>
    </Fragment>
  );

  return (
    <Styles.Container>
      <Logo />
      <Form footer={renderFooter()} title="Entrar">
        <Banner />
        <LabelledInput label="E-mail" name="email" type="email" />
        <LabelledInput label="Contraseña" name="password" type="password" />
      </Form>
    </Styles.Container>
  );
};
