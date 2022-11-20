import styled, { css } from 'styled-components';

import { set } from 'assets/icons';

import { shake } from 'ui/styles/animations/motion';
import { slideInDown, slideOutDown } from 'ui/styles/animations/slides';

import type { ButtonAppearance } from './@types/Button.types';

const ERROR_ICON_POSITION = '-100px -149px';
const SUCCESS_ICON_POSITION = '-77px -149px';

const loading = css`
  b {
    opacity: 0.12;
  }

  .loader-icon {
    animation: loader 0.7s steps(8) infinite, ${slideInDown} 0.4s both;
    top: 50%;
  }
`;

const error = css`
  animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  backface-visibility: hidden;
  background: #ff5c5c !important;
  border-color: #ff5c5c !important;
  color: #fff;
  transform: translate3d(0, 0, 0);
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  b {
    transition-delay: 2.2s;
  }
  .error-icon {
    animation: ${slideInDown} 0.78s forwards, ${slideOutDown} 0.4s 2s forwards;
    top: 50%;
  }
  .loader-icon {
    top: -100%;
    animation: loader 0.7s steps(8) infinite, ${slideOutDown} 0.45s 0.45s both;
  }
`;

const success = css`
  background: #34d186 !important;

  b {
    transition-delay: 2.2s;
  }
  .success-icon {
    animation: ${slideInDown} 0.78s forwards, ${slideOutDown} 0.4s 2s forwards;
    top: 50%;
  }
  .loader-icon {
    top: -100%;
    animation: loader 0.7s steps(8) infinite, ${slideOutDown} 0.45s 0.45s both;
  }
`;

const Button = styled('button')<{ appearance?: ButtonAppearance }>`
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  display: inline-block;
  flex-direction: row;
  margin: 0;
  overflow: hidden;
  padding: 8px 12px;
  position: relative;
  text-align: center;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  -moz-user-select: none;
  -webkit-user-select: none;

  &:hover {
    /* background: #4450d5;
    transition: all 100ms ease-in;
    opacity: 1; */
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.bright {
    background: #76a5d0;
    background: linear-gradient(#169bd0, #0d7fae);
    border: 1px solid #3b7ebb;
    border-color: #0f80ae #0f80ae #11698d #0f80ae;
    color: #fff;

    &:hover {
      background: linear-gradient(#1da5db, #0f87ba);
      border-color: #0f79a3 #0f79a3 #0f6383 #0f79a3;
      box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.24), 0 1px 2px 0 rgba(0, 0, 0, 0.11);
      text-decoration: none;
    }

    &:active {
      background: linear-gradient(#25a6da, #209bce);
      box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.12), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.11);
    }

    &:active b {
      color: #fff;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.35);
    }
  }
  &.light {
    background: linear-gradient(#90cfeb, #73c5ef);
    color: #fff;
    position: relative;
    text-shadow: 0 -1px #8bc0d9;
    border: 1px solid #3b7ebb;

    &:hover {
      background: linear-gradient(#9bd1f0, #8bc9f3);
      box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.24), 0 1px 2px 0 rgba(0, 0, 0, 0.11);
      text-decoration: none;
    }
  }
  &.primary {
    color: #fff;
    position: relative;
    text-shadow: 0 -1px #8bc0d9;
    background: #76a5d0;
    border: 1px solid #3b7ebb;
    color: #fff;

    &:hover {
      background: #5d8eb8;
      border-color: #3b7ebb;
      box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.24), 0 1px 2px 0 rgba(0, 0, 0, 0.11);
      text-decoration: none;
    }
  }
  &.secondary {
    background: #fff;
    border: 1px solid #e1e4e8;
    color: #586069;

    &:hover {
      background: #f6f8fa;
      border-color: #e1e4e8;
      box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.24), 0 1px 2px 0 rgba(0, 0, 0, 0.11);
      text-decoration: none;
    }
  }

  &.error {
    ${error}
  }

  &.pending {
    ${loading}
  }

  &.success {
    ${success}
  }
`;

const Indicator = styled('i')`
  height: 12px;
  left: 50%;
  margin: -8px 0 0 -6px;
  position: absolute;
  top: 50%;
  width: 16px;
  z-index: 1;

  top: -100%;

  background: url(${set}) no-repeat left top;
  color: transparent;
  display: inline-block;
  font: 0/0 a;
  height: 16px;
  vertical-align: middle;
  width: 16px;

  &.loader-icon {
    animation: loader 0.7s steps(8) infinite;
    background: url(${set}) no-repeat;
    height: 20px;
    margin: -12px 0 0 -10px;
    width: 20px;
  }

  &.success-icon {
    background-position: ${SUCCESS_ICON_POSITION};
  }
  &.error-icon {
    background-position: ${ERROR_ICON_POSITION};
  }

  @keyframes loader {
    from {
      background-position: 0px -408px;
    }
    to {
      background-position: -192px -408px;
    }
  }
`;

const Text = styled('b')`
  color: #fff;
  display: inline-block;
  font-size: 13px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  vertical-align: middle;

  transition: opacity 0.2s ease-out;
`;

export const Styles = { Button, Indicator, Text };
