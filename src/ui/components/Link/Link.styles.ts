import { Link as RouteLink } from 'react-router-dom';

import styled from 'styled-components';

const Link = styled(RouteLink)`
  color: #fff;
  font-weight: normal;
  padding: 6px 6px;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

export const Styles = { Link };
