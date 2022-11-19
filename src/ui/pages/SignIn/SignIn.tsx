import { Styles } from './SignIn.styles';

import { Banner } from 'ui/components/Banner';
import { Checkbox } from 'ui/components/Checkbox/Checkbox';
import { LabelledInput } from 'ui/components/LabelledInput';
import { Link } from 'ui/components/Link';
import { LoadingButton } from 'ui/components/LoadingButton/LoadingButton';

export const SignIn = () => {
  return (
    <Styles.Container>
      <Styles.FormTitle>Entrar</Styles.FormTitle>
      <Styles.Login>
        <Styles.Form>
          <Banner />
          <LabelledInput label="E-mail" />
          <LabelledInput label="Contraseña" />
          <div>
            <Checkbox checked={false} onChange={() => null} />
            Recordarme en este equipo
          </div>
          <LoadingButton />
        </Styles.Form>
      </Styles.Login>
      <Link>Recordar contraseña</Link>
      <Link>¿Quieres entrar?</Link>
    </Styles.Container>
  );
};
