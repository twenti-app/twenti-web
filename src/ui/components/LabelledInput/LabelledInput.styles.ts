import styled from 'styled-components';

const Wrapper = styled('div')`
  /* display: flex;
  flex-direction: column;
  margin-bottom: 1rem; */

  clear: both;
  margin: 0 0 8px 0;
  overflow: hidden;
`;

const Label = styled('label')`
  /* font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.25rem; */

  color: #7e7e7e;
  display: block;
  float: left;
  font-size: 11px;
  margin: 0 8px 0 0;
  padding: 5px 0;
  text-align: right;
  width: 70px;
`;

export const Styles = { Label, Wrapper };
