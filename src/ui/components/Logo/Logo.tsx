import { Styles } from './Logo.styles';

import { icon, logo } from 'assets/images';

import { useFountain } from 'ui/hooks/useFountain';

import type { LogoProps } from './@types/Logo.types';

export const Logo = ({ alt, className, isDisabled, onClick }: LogoProps) => {
  const fountainRef = useFountain<HTMLImageElement>({ isDisabled, particles: icon, type: 'image' });

  return <Styles.Logo alt={alt} className={className} onClick={onClick} ref={fountainRef} src={logo} />;
};
