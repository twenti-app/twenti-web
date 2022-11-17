import { keyframes } from 'styled-components';

export const slideOutUp = keyframes`
  0% {
    top: 50%;
  }
  100% {
    top: -150%;
  }
`;

export const slideOutDown = keyframes`
  0% {
    top: 50%;
  }
  100% {
    top: 150%;
  }
`;
