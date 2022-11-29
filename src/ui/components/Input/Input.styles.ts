import styled from 'styled-components';

const Input = styled.input`
  border-radius: 2px;
  border: 1px solid #c9c9c9;
  color: #333;
  cursor: text;
  font: 12px Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 4px;
  vertical-align: middle;
  width: 100%;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;

  &::placeholder {
    color: #cccccd;
  }

  &:focus {
    border: 1px solid #64a3cf;
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    color: #cccccc;
  }

  &.error {
    background-color: #fff;
    border: 1px solid #e58080;
    color: #cc0000;
  }
`;

export const Styles = { Input };
