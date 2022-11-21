import { Styles } from './AccessRequest.styles';

import { routes } from 'configuration/routes';

import { Banner } from 'ui/components/Banner';
import { Form } from 'ui/components/Form';
import { LabelledInput } from 'ui/components/LabelledInput';
import { Link } from 'ui/components/Link';
import { Logo } from 'ui/components/Logo';

export const AccessRequest = () => (
  <Styles.View>
    <Logo className="logo" />
    <Form title="Necesito invitaciones">
      <Banner
        text="Ahora puedes añadir tu e-mail a esta lista para que podamos comprobar si alguno de tus amigos está en Tuenti y puede enviarte una
          invitación."
        textAlign="left"
      />
      <LabelledInput label="E-mail" name="email" type="email" />
      <LabelledInput label="?" name="email" type="email" />
    </Form>
    <Link to={routes.LANDING}>Volver</Link>
  </Styles.View>
);
