import { Styles } from './Footer.styles';

import { Link } from 'ui/components/Link';

export const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.Links>
        <Link to="#">Blog</Link>
        <Link to="#">Idioma</Link>
      </Styles.Links>
      <small translate="no">
        &copy; Copyright <s>2010</s> {new Date().getFullYear()}, Twenti
      </small>
    </Styles.Footer>
  );
};
