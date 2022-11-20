import styled from 'styled-components';

import { Column } from 'ui/styles/elements/Column';
import { Section } from 'ui/styles/elements/Section';

const View = styled(Section)`
  gap: 1rem;
  justify-content: start;
`;

const Container = styled(Column)`
  gap: 2rem;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    position: relative;
    height: 100%;
    gap: 0;
  }
`;

const Description = styled('div')`
  display: flex;
  flex-direction: column;

  .logo {
    display: none;
  }

  @media screen and (min-width: 768px) {
    border-right: 1px solid #4d79a2;
    padding-right: 3rem;
    text-align: right;
    width: 360px;

    .logo {
      display: block;
      margin-bottom: 2rem;
    }
  }
`;

const MainPoints = styled('ul')`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    border-left: 1px solid #6590b7;
    padding-left: 3rem;
    height: 100%;
    justify-content: space-between !important;
    width: 360px;
  }
`;

const ActionButtons = styled('div')`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
`;

export const Styles = { ActionButtons, Description, MainPoints, View, Container };
