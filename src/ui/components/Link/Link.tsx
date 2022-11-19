import { Styles } from './Link.styles';

import type { AnchorHTMLAttributes } from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, ...rest }: LinkProps) => {
  return <Styles.Link {...rest}>{children}</Styles.Link>;
};
