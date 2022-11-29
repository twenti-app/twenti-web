import styled from 'styled-components';

const Header = styled('header')`
  align-items: center;
  border-bottom: 1px solid #6590b7;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    justify-content: end;

    .logo {
      display: none;
    }
  }
`;

export const Styles = { Header };
