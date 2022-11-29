import { Styles } from './Link.styles';

import type { LinkProps } from 'react-router-dom';

export const Link = ({ children, ...rest }: LinkProps) => <Styles.Link {...rest}>{children}</Styles.Link>;
