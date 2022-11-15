import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    ${reset}
    // 아래에 전역 스타일 추가
    html {
        font-family: 'Apple SD Gothic Neo';
        background-color: ${theme.colors.gray700};
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
