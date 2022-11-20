import styled from 'styled-components';

const Title = styled('h1')`
  /* text-align: center; */

  background-color: #c0dceb;
  border-bottom: 1px solid #accfe5;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: #3c4963;
  font-size: 11px;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  width: 100%;
  -moz-border-radius-topleft: 2px;
  -moz-border-radius-topright: 2px;
  -webkit-border-top-left-radius: 2px;
  -webkit-border-top-right-radius: 2px;
`;

const Form = styled('form')`
  background-color: white;
  border-radius: 2px;
  border: 1px solid #accfe5;
  padding: 1rem;
  width: 100%;
`;

const Footer = styled('footer')`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const Styles = { Footer, Form, Title };
