import styled from 'styled-components';

const Wrapper = styled('div')`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  margin: 0 0 0.5rem 0;
  overflow: hidden;
  padding: 0 1rem;
`;

const Label = styled('label')`
  color: #7e7e7e;
  display: block;
  font-size: 11px;
  font-weight: bold;
  min-width: 70px;
  text-align: right;
`;

export const Styles = { Label, Wrapper };
