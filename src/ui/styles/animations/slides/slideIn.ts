import { keyframes } from 'styled-components';

export const slideInUp = keyframes`
  0% {
    top: 250%;
  }
  60% {
    top: 150%;
  }
  80% {
    top: 35%;
  }
  100% {
    top: 50%;
  }
`;

export const slideInDown = keyframes`
  0% {
    top: -100%;
  }
  60% {
    top: -50%;
  }
  80% {
    top: 65%;
  }
  100% {
    top: 50%;
  }
`;
