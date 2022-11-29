import { Styles } from './SignIn.styles';

import { routes } from 'configuration/routes';

import { Banner } from 'ui/components/Banner';
import { Checkbox } from 'ui/components/Checkbox';
import { Form } from 'ui/components/Form';
import { LabelledInput } from 'ui/components/LabelledInput';
import { Link } from 'ui/components/Link';
import { Logo } from 'ui/components/Logo';

export const SignIn = () => {
  return (
    <Styles.View>
      <Logo className="logo" />
      <Form title="Entrar">
        <Banner text="Por favor, introduce tu e-mail y contraseña de Tuenti para entrar." type="warning" />
        <LabelledInput label="E-mail" name="email" placeholder="tu@mail.com" type="email" />
        <LabelledInput label="Contraseña" name="password" type="password" />
        <Checkbox label="Recuerdame en este equipo" />
      </Form>
      <p>
        Don't have an account? <Link to={routes.ACCESS_REQUEST}>Sign up</Link>
      </p>
    </Styles.View>
  );
};
