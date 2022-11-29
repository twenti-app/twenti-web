import styled from 'styled-components';

const Footer = styled('footer')`
  align-items: center;
  border-top: 1px solid #6590b7;
  color: white;
  display: flex;
  gap: 0.25rem;
  justify-content: space-around;
  margin-top: auto;
  padding: 1rem;
  width: auto;
`;

const Links = styled('div')`
  align-items: center;
  display: flex;
  gap: 0.5rem;
`;

export const Styles = { Footer, Links };
