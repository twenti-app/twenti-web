import { Styles } from './Header.styles';

import { LoadingButton } from 'ui/components/LoadingButton/LoadingButton';
import { Logo } from 'ui/components/Logo';

export const Header = () => {
  return (
    <Styles.Header>
      <Logo />
      <LoadingButton />
    </Styles.Header>
  );
};
