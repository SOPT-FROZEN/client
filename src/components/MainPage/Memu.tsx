import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { iItem } from "../../pages/MainPage";
import Allergy from "../common/Allergy";

interface iItemProps {
  item: iItem;
  key: number;
}

export default function Memu(props: iItemProps) {
  const price = props.item.priceOnly;
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  const menuPrice: string = price.toString().replace(priceRegex, ",");

  return (
    <>
      <MemuBox>
        <MemuImage src={props.item.image}></MemuImage>
        <MemuName>{props.item.menuName}</MemuName>
        <MemuAllergyList>
          <Allergy allergyData={props.item.allergy} />
        </MemuAllergyList>
        <MemuPrice>￦{menuPrice}</MemuPrice>
      </MemuBox>
    </>
  );
}

const MemuBox = styled.div`
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

const MemuName = styled.div`
  margin-left: 10px;
  ${theme.fonts.caption1};
  color: ${theme.colors.gray800};
  margin-bottom: 5px;
  width: 120px;
  height: 20px;
`;

const MemuAllergyList = styled.div`
  margin-left: 10px;
  margin-bottom: 25px;
  height: 20px;
`;

const MemuPrice = styled.div`
  margin-left: 10px;
  ${theme.fonts.subtitle1};
  color: ${theme.colors.green};
  width: 55px;
  height: 20px;
`;
