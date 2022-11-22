// 메뉴 전체 보여줄 메인페이지
import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Filter from "../components/MainPage/Filter";
import Menu from "../components/MainPage/Menu";
import { burger_image } from "../assets/image/asset";

export interface ItemProps {
  menuId: number;
  menuName: string;
  image: string;
  priceOnly: number;
}

export default function MainPage() {
  const [quantity, setQuantity] = useState<number>(0);
  const data = [
    {
      menuId: 1,
      menuName: "트리플 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
    },
    {
      menuId: 2,
      menuName: "맥스파이시 버거",
      image: burger_image,
      priceOnly: 7500,
    },
    {
      menuId: 3,
      menuName: "페퍼로니 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
    },
    {
      menuId: 4,
      menuName: "1955 버거",
      image: burger_image,
      priceOnly: 8500,
    },
    {
      menuId: 5,
      menuName: "트리플 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
    },
    {
      menuId: 6,
      menuName: "페퍼로니 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
    },
    {
      menuId: 7,
      menuName: "페퍼로니 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
    },
    {
      menuId: 7,
      menuName: "페퍼로니 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
    },
  ];
  const [menus, setMenus] = useState<ItemProps[]>(data);
  return (
    <>
      <MainBackground>
        <Filter />
        <MenuWrapper>
          {menus.map((item: ItemProps) => {
            return <Menu item={item} key={item.menuId} />;
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
