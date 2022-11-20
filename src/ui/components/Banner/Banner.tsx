import { Styles } from './Banner.styles';

import type { BannerProps } from './@types/Banner.types';

export const Banner = ({ text, type = 'info' }: BannerProps) => <Styles.Note className={type}>{text}</Styles.Note>;
