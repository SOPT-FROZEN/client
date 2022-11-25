import styled from "styled-components";
import theme from "../../styles/theme";
import Allergy from "../common/Allergy";
import { burger_image } from "../../assets/image/asset";
import { useNavigate } from "react-router-dom";

interface iItemProps {
  menuName: string;
  priceOnly: number;
  allergy: Array<"pig" | "cow" | "tomato" | "chicken" | "lettuce">;
  key: number;
  menuId: number;
}

export default function Menu({ menuName, allergy, priceOnly, menuId }: iItemProps) {
  const navigate = useNavigate();
  const price = priceOnly;
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  const menuPrice: string = price.toString().replace(priceRegex, ",");

  return (
    <>
      <MenuBox onClick={() => navigate(`/menu/${menuId}`)}>
        <MenuImage src={burger_image}></MenuImage>
        <MenuName>{menuName}</MenuName>
        <MenuAllergyList>
          <Allergy allergyData={allergy} />
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
  cursor: pointer;
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

const MenuPrice = styled.div`
  margin-left: 1rem;
  ${theme.fonts.subtitle1};
  color: ${theme.colors.green};
  width: 5.5rem;
  height: 2rem;
`;
