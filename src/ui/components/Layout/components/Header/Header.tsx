import { Styles } from './Header.styles';

import { routes } from 'configuration/routes';

import { Button } from 'ui/components/Button';
import { Logo } from 'ui/components/Logo';

import { useNavigation } from 'ui/hooks/useNavigation';

export const Header = () => {
  const { push } = useNavigation();

  return (
    <Styles.Header>
      <Logo className="logo" onClick={() => push(routes.LANDING)} />
      <Button onClick={() => push(routes.SIGN_IN)}>Inicia sesión</Button>
    </Styles.Header>
  );
};
