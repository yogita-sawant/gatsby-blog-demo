import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Scotties';
    src: url('./../../public/fonts/Scotties.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Scotties', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #5a3e36;
  }
  a {
    color: #d2691e;
    text-decoration: none;
  }

`;

export default GlobalStyles;
