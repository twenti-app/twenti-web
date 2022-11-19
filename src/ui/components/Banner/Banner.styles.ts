import styled from 'styled-components';

const Banner = styled('div')`
  background-color: #fffbd9;
  border: 1px solid #f8e1b9;
  padding: 3px 8px;
  text-align: center;
`;

const Note = styled('div')`
  background-color: #ffeee3;
  border: 1px solid #ffcece;
  border-radius: 2px;
  color: #666;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;

  &.banner {
    background-color: #fffbd9;
    border: 1px solid #f8e1b9;
    padding: 3px 8px;
    text-align: center;
  }
`;

export const Styles = { Banner, Note };
