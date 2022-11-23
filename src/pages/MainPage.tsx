// 메뉴 전체 보여줄 메인페이지
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Menu from "../components/MainPage/Menu";
import { getCategorydMenu } from "../util/api";

export interface iItem {
  menuId: number;
  menuName: string;
  image: string;
  priceOnly: number;
  allergy: Array<"pig" | "cow" | "tomato" | "chicken" | "lettuce">;
}

export default function MainPage() {
  const [quantity, setQuantity] = useState<number>(0);
  const [menus, setMenus] = useState<iItem[]>([]);
  const [currentMenu, setCurrentMenu] = useState({
    recommendation: false,
    burger: true,
    snacks: false,
    drink: false,
  });

  useEffect(() => {
    getMenu("burger");
  }, []);

  const getMenu = (categoryName: string) => {
    getCategorydMenu(categoryName).then((result: { data: React.SetStateAction<iItem[]> }) => setMenus(result.data));
  };

  const clickRecommendationButton = () => {
    setCurrentMenu({ ...currentMenu, recommendation: true, burger: false, snacks: false, drink: false });
    getMenu("recommend");
  };
  const clickBurgerButton = () => {
    setCurrentMenu({ ...currentMenu, recommendation: false, burger: true, snacks: false, drink: false });
    getMenu("burger");
  };
  const clickSnaksButton = () => {
    setCurrentMenu({ ...currentMenu, recommendation: false, burger: false, snacks: true, drink: false });
    getMenu("snack");
  };
  const clickDrinkButton = () => {
    setCurrentMenu({ ...currentMenu, recommendation: false, burger: false, snacks: false, drink: true });
    getMenu("drink");
  };

  return (
    <>
      <MainBackground>
        <CategoryButtonWrapper>
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
        </CategoryButtonWrapper>
        <MenuWrapper>
          {menus.map((item: iItem) => {
            return (
              <Menu menuName={item.menuName} priceOnly={item.priceOnly} allergy={item.allergy} key={item.menuId} />
            );
          })}
        </MenuWrapper>
        <BuyButton>구매하기 ({quantity})</BuyButton>
      </MainBackground>
    </>
  );
}

const MainBackground = styled.div`
  width: 37.5rem;
  height: auto;
  background-color: ${theme.colors.bg};
`;
const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.6rem 1rem 1.6rem 2rem;
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

const MenuWrapper = styled.div`
  width: 33.5rem;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
`;

const BuyButton = styled.button`
  width: 33.5rem;
  height: 5rem;
  background-color: #dddddd;
  ${theme.fonts.title2};
  color: ${theme.colors.white};
  border-radius: 1rem;
  border: none;
  position: fixed;
  bottom: 2.606rem;
  z-index: 1000;
  margin: 0 2rem;
  box-shadow: 0 0.3rem 1.3rem 0 rgba(0, 0, 0, 0.25);
`;
