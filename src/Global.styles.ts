import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    
  :root {
    --bg-color: #64a3cf;
    --text-color: white;
  }

  body {
    background: #4e7ba8;
    color: var(--text-color);
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  p {
    font-size: 14px;
    line-height: 1.4em;
    color: #B6CDDD;
  }
`;
