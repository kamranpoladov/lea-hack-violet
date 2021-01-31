import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    min-width: 320px;
    margin: 10px;
    font-family: Roboto, Arial, sans-serif;
  }

  a: {
    color: inherit
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
