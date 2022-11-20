import styled from 'styled-components';

const Point = styled('li')`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    color: #b6cddd;
    line-height: 1.2em;
  }
`;

const Icon = styled('img')`
  height: 50px;
  object-fit: none;
  width: 50px !important;
`;

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Styles = { Icon, Point, Wrapper };
