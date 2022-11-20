import { Styles } from './Header.styles';

import { routes } from 'configuration/routes';

import { Button } from 'ui/components/Button';
import { Logo } from 'ui/components/Logo';

import { useNavigation } from 'ui/hooks/useNavigation';

export const Header = () => {
  const { push } = useNavigation();

  const redirect = () => push(routes.SIGN_IN);

  return (
    <Styles.Header>
      <Logo />
      <Button onClick={redirect}>Inicia sesión</Button>
    </Styles.Header>
  );
};
