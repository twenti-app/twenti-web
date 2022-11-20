import styled from 'styled-components';

const Note = styled('div')`
  border-radius: 2px;
  color: #666;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 1rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;

  &.error {
    background-color: #ffeee3;
    border: 1px solid #ffcece;
  }

  &.warning {
    background-color: #fffbd9;
    border: 1px solid #f8e1b9;
  }

  &.info {
    background-color: #e8f5ff;
    border: 1px solid #c9e1ff;
  }

  &.success {
    background-color: #e6f7e6;
    border: 1px solid #c1e1c1;
  }
`;

export const Styles = { Note };
