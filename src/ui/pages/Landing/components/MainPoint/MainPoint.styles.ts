import styled from 'styled-components';

const Point = styled('div')`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    color: #b6cddd;
    line-height: 1.2em;
  }
`;

const Icon = styled('img')`
  object-fit: none;
  min-width: 50px;
`;

const Wrapper = styled('li')`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Styles = { Icon, Point, Wrapper };
