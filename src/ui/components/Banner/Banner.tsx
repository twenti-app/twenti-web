import { Styles } from './Banner.styles';

import type { BannerProps } from './@types/Banner.types';

export const Banner = ({ text, textAlign, type = 'info' }: BannerProps) => (
  <Styles.Note className={type} style={{ textAlign }}>
    {text}
  </Styles.Note>
);
