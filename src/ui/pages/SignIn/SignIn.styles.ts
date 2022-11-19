import styled from 'styled-components';

const Container = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  width: 300px;
  margin: auto;
`;

const Login = styled('div')`
  background-color: #fff;
  padding: 15px;
`;

const FormTitle = styled('h2')`
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
  /* padding: 10px 0; */

  border: 0;
  margin: 0;
  padding-top: 15px;
  padding: 0;

  fieldset {
  }
`;

export const Styles = { Container, Form, FormTitle, Login };
