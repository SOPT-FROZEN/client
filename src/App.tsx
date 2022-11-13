import React from "react";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

const MobileContainer = styled.div`
  position: relative;

  margin: 0 auto;

  width: 375px;
`;

function App() {
  return (
    <MobileContainer>
      <GlobalStyle />
      <Router />
    </MobileContainer>
  );
}

export default App;
