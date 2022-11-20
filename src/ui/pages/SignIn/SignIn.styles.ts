import styled from 'styled-components';

import { Section } from 'ui/styles/elements/Section';

const View = styled(Section)`
  height: 300px;
  width: 300px;

  .logo {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export const Styles = { View };
