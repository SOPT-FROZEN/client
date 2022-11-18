import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { AllergyChicken } from "../../assets/image/asset";
import { AllergyCow } from "../../assets/image/asset";
import { AllergyLettuce } from "../../assets/image/asset";
import { AllergyPig } from "../../assets/image/asset";
import { AllergyTomato } from "../../assets/image/asset";
import { ItemProps } from "../../pages/MainPage";

interface Props {
  item: ItemProps;
  key: number;
}

export default function Memu({ item }: Props) {
  const price = item.priceOnly;
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  const menuPrice: string = price.toString().replace(priceRegex, ",");
  const Allergy = [
    {
      name: "pig",
      src: AllergyPig,
      altName: "돼지고기 알러지 이미지",
    },
    {
      name: "cow",
      src: AllergyCow,
      altName: "소고기 알러지 이미지",
    },
    {
      name: "chicken",
      src: AllergyChicken,
      altName: "닭고기 알러지 이미지",
    },
    {
      name: "lettuce",
      src: AllergyLettuce,
      altName: "양배추 알러지 이미지",
    },
    {
      name: "tomato",
      src: AllergyTomato,
      altName: "토마토 알러지 이미지",
    },
  ];

  return (
    <>
      <MemuBox>
        <MemuImage src={item.image}></MemuImage>
        <MemuName>{item.menuName}</MemuName>
        <MemuAllergyList>
          {Allergy.map(
            (icon) =>
              item.allergy.includes(icon.name) && (
                <MemuAllergy key={icon.name} src={icon.src} alt={icon.altName}></MemuAllergy>
              ),
          )}
        </MemuAllergyList>
        <MemuPrice>￦{menuPrice}</MemuPrice>
      </MemuBox>
    </>
  );
}

const MemuBox = styled.article`
  width: 164px;
  height: 252px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MemuImage = styled.img`
  width: 146px;
  height: 133px;
  border-radius: 5px;
  margin: 10px 9px 13px 9px;
`;

const MemuName = styled.h1`
  margin-left: 10px;
  ${theme.fonts.caption1};
  color: ${theme.colors.gray800};
  margin-bottom: 5px;
  width: 120px;
  height: 20px;
`;

const MemuAllergyList = styled.section`
  margin-left: 10px;
  margin-bottom: 25px;
  height: 20px;
`;

const MemuAllergy = styled.img`
  width: 18px;
  height: 18px;
`;

const MemuPrice = styled.h2`
  margin-left: 10px;
  ${theme.fonts.subtitle1};
  color: ${theme.colors.green};
  width: 55px;
  height: 20px;
`;
