import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const FilterButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 10px 16px 20px;
`;

const RecommendationButton = styled.button`
  width: 74px;
  height: 40px;
  background-color: #d9d9d9;
  ${theme.fonts.body3};
  color: ${theme.colors.white};
  padding: 10px;
  border-radius: 20px;
`;

const BurgerButton = styled.button`
  width: 87px;
  height: 40px;
  background-color: #d9d9d9;
  ${theme.fonts.body3};
  color: ${theme.colors.white};
  padding: 10px;
  border-radius: 20px;
`;
const SnackButton = styled.button`
  width: 99px;
  height: 40px;
  background-color: #d9d9d9;
  ${theme.fonts.body3};
  color: ${theme.colors.white};
  padding: 10px;
  border-radius: 20px;
`;
const DrinkButton = styled.button`
  width: 46px;
  height: 40px;
  background-color: #d9d9d9;
  ${theme.fonts.body3};
  color: ${theme.colors.white};
  padding: 10px;
  border-radius: 20px;
`;

export default function Filter() {
  return (
    <FilterButtonWrapper>
      <RecommendationButton>추천 메뉴</RecommendationButton>
      <BurgerButton>버거&세트</BurgerButton>
      <SnackButton>스낵&사이드</SnackButton>
      <DrinkButton>음료</DrinkButton>
    </FilterButtonWrapper>
  );
}
