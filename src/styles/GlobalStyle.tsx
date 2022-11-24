import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";
import AppleSDGothicNeo from "../assets/fonts/AppleSDGothicNeoR.woff";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'Apple SD Gothic Neo';
        src: url(${AppleSDGothicNeo}) format('woff'); 
        font-weight: normal;
    }
    // 아래에 전역 스타일 추가
    html {
        font-family: 'Apple SD Gothic Neo';
        background-color: ${theme.colors.gray700};
        /* 1rem = 10px */
        font-size: 62.5%;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    input, button {
        outline: none;
        border: none;
    }

    button{
        background-color: transparent;
    }
`;

export default GlobalStyle;
