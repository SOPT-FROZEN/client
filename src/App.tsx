import React from "react";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";
import Header from "./components/common/Header";

function App() {
  return (
    <MobileContainer>
      <GlobalStyle />
      <Header />
      <Router />
    </MobileContainer>
  );
}

const MobileContainer = styled.div`
  position: relative;

  margin: 0 auto;

  width: 37.5rem;
`;

export default App;
