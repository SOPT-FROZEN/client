import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    @import "//cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css";

    ${reset}
    // 아래에 전역 스타일 추가
    html {
        font-family: 'Apple Sandoll Gothic Neo';
        background-color: ${theme.colors.bg};
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    input, button {
        outline: none;
        border: none;
    }
`;

export default GlobalStyle;
