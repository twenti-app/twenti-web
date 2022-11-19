import styled from 'styled-components';

export const LoadingBtn = styled('a')`
  position: relative;
  overflow: hidden;
  font-size: 11px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  user-select: none;

  & > span {
    height: 32px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    border: 1px solid;
    border-radius: 4px;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.19);

    background: #76a5d0;
    border: 1px solid #3b7ebb;
    color: #fff;
    /* border-color: #0f80ae #0f80ae #11698d #0f80ae;
    background: linear-gradient(#169bd0, #0d7fae); */
  }
  &:hover > span {
    /* border-color: #0f79a3 #0f79a3 #0f6383 #0f79a3; */
    text-decoration: none;
    /* background: linear-gradient(#1da5db, #0f87ba); */
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.24), 0 1px 2px 0 rgba(0, 0, 0, 0.11);
  }
  &:active > span {
    box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.12), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.11);
    /* background: linear-gradient(#25a6da, #209bce); */
  }

  & b {
    padding: 0 12px;
    display: inline-block;
    vertical-align: middle;
    font-size: 13px;
    font-weight: bold;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    color: #fff;
    line-height: 34px;
  }
  &:active b {
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.35);
  }

  & .act-indicator {
    position: absolute;
    width: 16px;
    height: 12px;
    top: 50%;
    left: 50%;
    z-index: 1;
    margin: -8px 0 0 -6px;
  }

  .act-indicator.i-M-loader {
    width: 20px;
    height: 20px;
    margin: -12px 0 0 -10px;
  }

  & b {
    transition: opacity 0.2s ease-out;
  }

  &.act-success b {
    transition-delay: 2.2s;
  }

  /* default state of icons */
  & .act-indicator {
    top: -100%;
  }

  /* Move the spinner (slide in) and fade out the text */
  &.act-loading b {
    opacity: 0.12;
  }
  &.act-loading .act-indicator.i-M-loader {
    top: 50%;
    animation: loader 0.7s steps(8) infinite, slideInDown 0.4s both;
  }

  /* Move the feedback (success or error) */
  &.act-success .i-accept {
    top: 50%;
    animation: slideInDown 0.78s forwards, slideOutDown 0.4s 2s forwards;
  }

  /* Move the spinner  (slide out) */
  &.act-success .act-indicator.i-M-loader {
    top: -100%;
    animation: loader 0.7s steps(8) infinite, slideOutDown 0.45s 0.45s both;
  }

  /* Icons */
  [class*='i-'] {
    display: inline-block;
    vertical-align: middle;
    background: url(https://cl.ly/I3jr/sprite.png) no-repeat left top;
    font: 0/0 a;
    color: transparent;
    width: 16px;
    height: 16px;
  }

  [class*='i-M'] {
    width: 20px;
    height: 20px;
  }

  .i-M-loader {
    background: url(https://cl.ly/I3jr/sprite.png) no-repeat;
    animation: loader 0.7s steps(8) infinite;
  }
  .i-accept {
    background-position: -77px -149px;
  }

  /* Keyframes declarations */
  @keyframes slideInDown {
    0% {
      top: -100%;
    }
    60% {
      top: -50%;
    }
    80% {
      top: 65%;
    }
    100% {
      top: 50%;
    }
  }

  @keyframes slideInUp {
    0% {
      top: 250%;
    }
    60% {
      top: 150%;
    }
    80% {
      top: 35%;
    }
    100% {
      top: 50%;
    }
  }

  @keyframes slideOutDown {
    0% {
      top: 50%;
    }
    100% {
      top: 150%;
    }
  }

  @keyframes slideOutUp {
    0% {
      top: 50%;
    }
    100% {
      top: -150%;
    }
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
