import styled from 'styled-components';

const Logo = styled('img')`
  display: block;
  transition: transform 0.1s ease-in;
  user-select: none;
  width: clamp(150px, 20vw, 100%);

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;

export const Styles = { Logo };
