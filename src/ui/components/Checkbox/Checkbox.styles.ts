import styled from 'styled-components';

const Container = styled('div')`
  align-items: center;
  color: #333;
  display: flex;
  margin: 0 0 5px 0;

  /* display: block; */

  font-size: 11px;

  color: #7e7e7e;

  width: auto;
  padding: 0;
  font-weight: normal;
  /* float: left; */
  /* text-align: left; */
  margin: 0;
`;

const Checkbox = styled('input')`
  background: none;
  border: none;
  font-size: small;
  margin-right: 3px;
  padding: 0;
  vertical-align: middle;
  width: auto;

  &:focus {
    outline: none;
  }
`;

export const Styles = { Checkbox, Container };
