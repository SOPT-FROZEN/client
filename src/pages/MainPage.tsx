// 메뉴 전체 보여줄 메인페이지
import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Filter from "../components/MainPage/Filter";

const MainBackground = styled.div`
  width: 375px;
  height: auto;
  background-color: ${theme.colors.bg};
`;

const BuyButton = styled.button`
  width: 335px;
  height: 50px;
  background-color: #dddddd;
  ${theme.fonts.title2};
  color: ${theme.colors.white};
  border-radius: 10px;
  border: none;
`;
export default function MainPage() {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <>
      <MainBackground>
        <Filter />
        <BuyButton>구매하기 ({quantity})</BuyButton>
      </MainBackground>
    </>
  );
}
