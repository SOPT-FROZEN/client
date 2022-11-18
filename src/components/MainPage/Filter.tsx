import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

export default function Filter() {
  const [currentMenu, setCurrentMenu] = useState({
    recommendation: true,
    burger: false,
    snacks: false,
    drink: false,
  });
  const clickRecommendationButton = () => {
    setCurrentMenu({ ...currentMenu, recommendation: true, burger: false, snacks: false, drink: false });
  };
  const clickBurgerButton = () => {
    setCurrentMenu({ ...currentMenu, recommendation: false, burger: true, snacks: false, drink: false });
  };
  const clickSnaksButton = () => {
    setCurrentMenu({ ...currentMenu, recommendation: false, burger: false, snacks: true, drink: false });
  };
  const clickDrinkButton = () => {
    setCurrentMenu({ ...currentMenu, recommendation: false, burger: false, snacks: false, drink: true });
  };

  return (
    <FilterButtonWrapper>
      <RecommendationButton type="button" onClick={clickRecommendationButton} isClicked={currentMenu.recommendation}>
        추천 메뉴
      </RecommendationButton>
      <BurgerButton type="button" onClick={clickBurgerButton} isClicked={currentMenu.burger}>
        버거&세트
      </BurgerButton>
      <SnackButton type="button" onClick={clickSnaksButton} isClicked={currentMenu.snacks}>
        스낵&사이드
      </SnackButton>
      <DrinkButton type="button" onClick={clickDrinkButton} isClicked={currentMenu.drink}>
        음료
      </DrinkButton>
    </FilterButtonWrapper>
  );
}

const FilterButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px 16px 20px;
  padding-top: 16px;
`;

const RecommendationButton = styled.button<{ isClicked: boolean }>`
  width: 74px;
  height: 40px;
  background-color: ${({ isClicked }) => (isClicked ? `${theme.colors.red}` : "#d9d9d9")};
  ${theme.fonts.body4};
  color: ${theme.colors.white};
  padding: 10px;
  border-radius: 20px;
`;

const BurgerButton = styled.button<{ isClicked: boolean }>`
  width: 87px;
  height: 40px;
  background-color: ${({ isClicked }) => (isClicked ? `${theme.colors.red}` : "#d9d9d9")};
  ${theme.fonts.body4};
  color: ${theme.colors.white};
  padding: 10px;
  border-radius: 20px;
`;

const SnackButton = styled.button<{ isClicked: boolean }>`
  width: 99px;
  height: 40px;
  background-color: ${({ isClicked }) => (isClicked ? `${theme.colors.red}` : "#d9d9d9")};
  ${theme.fonts.body4};
  color: ${theme.colors.white};
  padding: 10px;
  border-radius: 20px;
`;

const DrinkButton = styled.button<{ isClicked: boolean }>`
  width: 46px;
  height: 40px;
  background-color: ${({ isClicked }) => (isClicked ? `${theme.colors.red}` : "#d9d9d9")};
  ${theme.fonts.body4};
  color: ${theme.colors.white};
  padding: 10px;
  border-radius: 20px;
`;
