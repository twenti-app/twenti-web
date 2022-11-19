import styled from 'styled-components';

const Footer = styled('footer')`
  bottom: 0;
  display: flex;
  gap: 0.25rem;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  position: absolute;
  width: 100%;
  color: white;
`;

const Links = styled('div')`
  align-items: center;
  display: flex;
  gap: 0.5rem;
`;

export const Styles = { Footer, Links };
