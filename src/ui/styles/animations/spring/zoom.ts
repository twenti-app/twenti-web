import { keyframes } from 'styled-components';

const enter = keyframes`
  from {
    transform: scale3d(0.3, 0.3, 0.3);
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
  }
`;

const leave = keyframes`
  to {
    transform: scale3d(0.3, 0.3, 0.3);
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
  }
`;

export const zoom = { enter, leave };
