import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { icon_chicken, icon_cow, icon_letture, icon_pig, icon_tomato } from "../../assets/image/asset";

import { ItemProps } from "../../pages/MainPage";

interface Props {
  item: ItemProps;
  key: number;
}

export default function Menu(props: Props) {
  const price = props.item.priceOnly;
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  const menuPrice: string = price.toString().replace(priceRegex, ",");

  return (
    <>
      <MenuBox>
        <MenuImage src={props.item.image}></MenuImage>
        <MenuName>{props.item.menuName}</MenuName>
        <MenuAllergyList>
          <MenuAllergy src={icon_chicken} />
          <MenuAllergy src={icon_cow} />
          <MenuAllergy src={icon_letture} />
          <MenuAllergy src={icon_pig} />
          <MenuAllergy src={icon_tomato} />
        </MenuAllergyList>
        <MenuPrice>￦{menuPrice}</MenuPrice>
      </MenuBox>
    </>
  );
}

const MenuBox = styled.div`
  width: 16.4rem;
  height: 25.2rem;
  background-color: ${theme.colors.white};
  border-radius: 0.5rem;
  margin-bottom: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuImage = styled.img`
  width: 14.6rem;
  height: 13.3rem;
  border-radius: 0.5rem;
  margin: 1rem 0.9rem 1.3rem 0.9rem;
`;

const MenuName = styled.div`
  margin-left: 1rem;
  ${theme.fonts.caption1};
  color: ${theme.colors.gray800};
  margin-bottom: 0.5rem;
  width: 12rem;
  height: 2rem;
`;

const MenuAllergyList = styled.div`
  margin-left: 1rem;
  margin-bottom: 2.5rem;
  height: 2rem;
`;

const MenuAllergy = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const MenuPrice = styled.div`
  margin-left: 1rem;
  ${theme.fonts.subtitle1};
  color: ${theme.colors.green};
  width: 5.5rem;
  height: 2rem;
`;
