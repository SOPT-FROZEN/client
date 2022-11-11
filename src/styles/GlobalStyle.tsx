import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    // 아래에 전역 스타일 추가
`;

export default GlobalStyle;
