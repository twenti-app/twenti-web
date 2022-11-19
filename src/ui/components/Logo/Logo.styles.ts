import styled from 'styled-components';

const Logo = styled('img')`
  /* width: 273px;
  height: 69px; */
  /* width: clamp(273px, 20vw, 100%);
  height: clamp(69px, 20vw, 100%); */
  /* width: clamp(4rem, 15vw, 7rem);
  height: clamp(4rem, 15vw, 7rem); */
  /* width: clamp(4rem, 15vw, 7rem); */
  width: clamp(150px, 20vw, 100%);

  display: block;
  /* text-indent: -10000px;
  text-align: left;
  float: right;
  margin: 0 0 35px 0; */
  /* padding: 0 0.5rem; */
  transition: transform 0.1s ease-in;
  user-select: none;
  /* width: clamp(4rem, 15vw, 7rem); */

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;

export const Styles = { Logo };
