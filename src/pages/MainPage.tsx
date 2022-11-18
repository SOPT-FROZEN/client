// 메뉴 전체 보여줄 메인페이지
import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Filter from "../components/MainPage/Filter";
import Memu from "../components/MainPage/Memu";
import { burger_image } from "../assets/image/asset";

export interface ItemProps {
  menuId: number;
  menuName: string;
  image: string;
  priceOnly: number;
  allergy: string[];
}

export default function MainPage() {
  const [quantity, setQuantity] = useState<number>(0);
  const data = [
    {
      menuId: 1,
      menuName: "트리플 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
      allergy: ["pig", "cow", "chicken", "lettuce"],
    },
    {
      menuId: 2,
      menuName: "맥스파이시 버거",
      image: burger_image,
      priceOnly: 7500,
      allergy: ["pig", "cow", "chicken", "lettuce"],
    },
    {
      menuId: 3,
      menuName: "페퍼로니 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
      allergy: ["tomato", "cow"],
    },
    {
      menuId: 4,
      menuName: "1955 버거",
      image: burger_image,
      priceOnly: 8500,
      allergy: ["cow", "lettue"],
    },
    {
      menuId: 5,
      menuName: "트리플 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
      allergy: ["tomato", "cow"],
    },
    {
      menuId: 6,
      menuName: "페퍼로니 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
      allergy: ["cow", "lettue"],
    },
    {
      menuId: 7,
      menuName: "페퍼로니 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
      allergy: ["cow", "lettue"],
    },
    {
      menuId: 7,
      menuName: "페퍼로니 치즈 버거",
      image: burger_image,
      priceOnly: 5700,
      allergy: ["cow", "lettue"],
    },
  ];
  const [menus, setMenus] = useState<ItemProps[]>(data);
  return (
    <>
      <MainBackground>
        <Filter />
        <MemuWrapper>
          {menus.map((item: ItemProps) => {
            return <Memu item={item} key={item.menuId} />;
          })}
        </MemuWrapper>
        <BuyButton>구매하기 ({quantity})</BuyButton>
      </MainBackground>
    </>
  );
}

const MainBackground = styled.div`
  width: 375px;
  height: auto;
  background-color: ${theme.colors.bg};
`;

const MemuWrapper = styled.section`
  width: 335px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

const BuyButton = styled.button`
  width: 335px;
  height: 50px;
  background-color: #dddddd;
  ${theme.fonts.title2};
  color: ${theme.colors.white};
  border-radius: 10px;
  border: none;
  position: fixed;
  bottom: 26.06px;
  z-index: 1000;
  margin: 0 20px;
  box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.25);
`;
