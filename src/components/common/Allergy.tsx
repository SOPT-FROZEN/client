import React from "react";
import { AllergyPig, AllergyCow, AllergyChicken, AllergyLettuce, AllergyTomato } from "../../assets/image/asset";
import styled from "styled-components";

interface iAllergyInfo {
  name: "pig" | "cow" | "tomato" | "chicken" | "lettuce";
  src: string;
  altName: string;
}

interface iAllergyDataProps {
  allergyData: Array<"pig" | "cow" | "tomato" | "chicken" | "lettuce">;
}

export default function Allergy({ allergyData }: iAllergyDataProps) {
  const allergyInfo: iAllergyInfo[] = [
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
      {allergyInfo.map(
        (icon) =>
          allergyData.includes(icon.name) && (
            <DetailAllergyIcon key={icon.name} src={icon.src} alt={icon.altName}></DetailAllergyIcon>
          ),
      )}
    </>
  );
}

const DetailAllergyIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
