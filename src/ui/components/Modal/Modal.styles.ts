import styled, { css } from 'styled-components';

import { zoom } from 'ui/styles/animations/spring';

import type { AnimationStatus } from './@types/Modal.types';

const Container = styled('div')<{ animationStatus: AnimationStatus }>`
  --vh: 8.44px;

  align-items: flex-end;
  display: flex;
  flex-direction: row;
  inset: 0px;
  justify-content: center;
  max-height: calc(var(--vh, 1vh) * 100);
  padding-top: 12px;
  position: fixed;
  z-index: 2000;
  -webkit-box-direction: normal;
  -webkit-box-align: end;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;

  @supports (max-height: -webkit-fill-available) {
    max-height: max(-webkit-fill-available, calc(var(--vh, 1vh) * 100)) !important;
  }
`;

const Dialog = styled('div')<{ animationStatus: AnimationStatus }>`
  backdrop-filter: blur(100px);
  border-radius: 7px;
  bottom: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.21), 0 6px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: fit-content;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  min-width: 500px;
  width: fit-content;
  z-index: 99999;
  background-color: white;
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  padding: 1rem;
  animation: ${({ animationStatus }) =>
    css`
      ${zoom[animationStatus]} both ${animationStatus === 'enter' ? 'cubic-bezier(0.4, 0, 0, 1.5)' : ''}
    `};
  animation-duration: 300ms;
  -webkit-animation-duration: 300ms;
  position: relative;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 945px) {
    min-width: 300px;
    padding: 0;
  }
`;

const CloseButton = styled('button')`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;

const sizes = css`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99999 - 1;
`;

const Mask = styled('div')`
  ${sizes}
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  position: absolute;

  transition: backdrop-filter 0.3s ease-in-out;
`;

export const Styles = { CloseButton, Container, Dialog, Mask };
