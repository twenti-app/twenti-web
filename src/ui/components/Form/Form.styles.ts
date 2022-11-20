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
  padding: 4px 10px 3px;
  width: 100%;
  -moz-border-radius-topleft: 2px;
  -moz-border-radius-topright: 2px;
  -webkit-border-top-left-radius: 2px;
  -webkit-border-top-right-radius: 2px;
`;

const Form = styled('form')`
  width: 100%;
  background-color: white;
  border: 1px solid #accfe5;
  border-radius: 2px;
  padding: 1rem;
`;

const Footer = styled('footer')`
  display: flex;
  padding: 0.5rem;
`;

export const Styles = { Footer, Form, Title };
