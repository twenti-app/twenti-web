import { Styles } from './Logo.styles';

import { icon, logo } from 'assets/images';

import { useFountain } from 'ui/hooks/useFountain/useFountain';

interface LogoProps {
  isDisabled?: boolean;
}

export const Logo = ({ isDisabled }: LogoProps) => {
  const fountainRef = useFountain<HTMLImageElement>({ isDisabled, particles: icon, type: 'image' });

  return <Styles.Logo ref={fountainRef} src={logo} />;
};
