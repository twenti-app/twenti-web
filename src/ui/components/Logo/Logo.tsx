import { Styles } from './Logo.styles';

import { icon, logo } from 'assets/images';

import { useFountain } from 'ui/hooks/useFountain';

import type { LogoProps } from './@types/Logo.types';

export const Logo = ({ isDisabled }: LogoProps) => {
  const fountainRef = useFountain<HTMLImageElement>({ isDisabled, particles: icon, type: 'image' });

  return <Styles.Logo ref={fountainRef} src={logo} />;
};
