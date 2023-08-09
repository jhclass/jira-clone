// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* 여기에 전역 스타일을 정의합니다 */
  *{margin:0; padding:0; box-sizing:border-box;}
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  li{list-stylen:none;}
  a { display:block; color:#111; text-decoration:none;}
  img {border:0; vertical-align:top;}
`;

export default GlobalStyles;
