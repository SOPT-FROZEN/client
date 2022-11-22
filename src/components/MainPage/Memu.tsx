import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { icon_chicken, icon_cow, icon_letture, icon_pig, icon_tomato } from "../../assets/image/asset";

import { ItemProps } from "../../pages/MainPage";

interface Props {
  item: ItemProps;
  key: number;
}

export default function Memu(props: Props) {
  const price = props.item.priceOnly;
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  const menuPrice: string = price.toString().replace(priceRegex, ",");

  return (
    <>
      <MemuBox>
        <MemuImage src={props.item.image}></MemuImage>
        <MemuName>{props.item.menuName}</MemuName>
        <MemuAllergyList>
          <MemuAllergy src={icon_chicken} />
          <MemuAllergy src={icon_cow} />
          <MemuAllergy src={icon_letture} />
          <MemuAllergy src={icon_pig} />
          <MemuAllergy src={icon_tomato} />
        </MemuAllergyList>
        <MemuPrice>￦{menuPrice}</MemuPrice>
      </MemuBox>
    </>
  );
}

const MemuBox = styled.div`
  width: 16.4rem;
  height: 25.2rem;
  background-color: ${theme.colors.white};
  border-radius: 0.5rem;
  margin-bottom: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MemuImage = styled.img`
  width: 14.6rem;
  height: 13.3rem;
  border-radius: 0.5rem;
  margin: 1rem 0.9rem 1.3rem 0.9rem;
`;

const MemuName = styled.div`
  margin-left: 1rem;
  ${theme.fonts.caption1};
  color: ${theme.colors.gray800};
  margin-bottom: 0.5rem;
  width: 12rem;
  height: 2rem;
`;

const MemuAllergyList = styled.div`
  margin-left: 1rem;
  margin-bottom: 2.5rem;
  height: 2rem;
`;

const MemuAllergy = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const MemuPrice = styled.div`
  margin-left: 1rem;
  ${theme.fonts.subtitle1};
  color: ${theme.colors.green};
  width: 5.5rem;
  height: 2rem;
`;
