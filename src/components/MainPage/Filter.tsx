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
      <RecommendationButton onClick={clickRecommendationButton} isClicked={currentMenu.recommendation}>
        추천 메뉴
      </RecommendationButton>
      <BurgerButton onClick={clickBurgerButton} isClicked={currentMenu.burger}>
        버거&세트
      </BurgerButton>
      <SnackButton onClick={clickSnaksButton} isClicked={currentMenu.snacks}>
        스낵&사이드
      </SnackButton>
      <DrinkButton onClick={clickDrinkButton} isClicked={currentMenu.drink}>
        음료
      </DrinkButton>
    </FilterButtonWrapper>
  );
}

const FilterButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.6rem 1rem 1.6rem 2rem;
`;

const RecommendationButton = styled.button<{ isClicked: boolean }>`
  width: 7.4rem;
  height: 4rem;
  background-color: ${({ isClicked }) => (isClicked ? `${theme.colors.red}` : "#d9d9d9")};
  ${theme.fonts.body4};
  color: ${theme.colors.white};
  padding: 1rem;
  border-radius: 2rem;
`;

const BurgerButton = styled.button<{ isClicked: boolean }>`
  width: 8.7rem;
  height: 4rem;
  background-color: ${({ isClicked }) => (isClicked ? `${theme.colors.red}` : "#d9d9d9")};
  ${theme.fonts.body4};
  color: ${theme.colors.white};
  padding: 1rem;
  border-radius: 2rem;
`;

const SnackButton = styled.button<{ isClicked: boolean }>`
  width: 9.9rem;
  height: 4rem;
  background-color: ${({ isClicked }) => (isClicked ? `${theme.colors.red}` : "#d9d9d9")};
  ${theme.fonts.body4};
  color: ${theme.colors.white};
  padding: 1rem;
  border-radius: 2rem;
`;

const DrinkButton = styled.button<{ isClicked: boolean }>`
  width: 4.6rem;
  height: 4rem;
  background-color: ${({ isClicked }) => (isClicked ? `${theme.colors.red}` : "#d9d9d9")};
  ${theme.fonts.body4};
  color: ${theme.colors.white};
  padding: 1rem;
  border-radius: 2rem;
`;
