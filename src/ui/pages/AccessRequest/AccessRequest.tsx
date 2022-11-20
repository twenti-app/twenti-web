import { Styles } from './AccessRequest.styles';

import { routes } from 'configuration/routes';

import { Form } from 'ui/components/Form';
import { LabelledInput } from 'ui/components/LabelledInput';
import { Link } from 'ui/components/Link';
import { Logo } from 'ui/components/Logo';

export const AccessRequest = () => {
  return (
    <Styles.Container>
      <Logo />
      <Form footer={<Link to={routes.LANDING}>Volver</Link>} title="Entrar">
        <p style={{ color: '#8A8A8A' }}>
          Ahora puedes añadir tu e-mail a esta lista para que podamos comprobar si alguno de tus amigos está en Tuenti y puede enviarte una
          invitación.
        </p>
        <LabelledInput label="E-mail" name="email" type="email" />
      </Form>
    </Styles.Container>
  );
};
