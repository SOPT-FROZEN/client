import React from "react";
import styled from "styled-components";
import { CartMenuImage } from "../../../assets/image/asset";
import theme from "../../../styles/theme";

interface iMenuProps {
  set: string;
  price: number;
}

export default function CardMenu({ set, price }: iMenuProps) {
  return (
    <CardContentMenu>
      <MenuImg src={CartMenuImage} alt="메뉴이미지" />
      <DetailContainer>
        <DetailTitle>
          {set}
          <span>₩ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </DetailTitle>
        <DetailOptions>
          <li>사이드 - 후렌치 후라이</li>
          <li>음료 - 코카콜라</li>
        </DetailOptions>
      </DetailContainer>
    </CardContentMenu>
  );
}

const CardContentMenu = styled.article`
  display: flex;
`;

const MenuImg = styled.img`
  margin-top: 0.13rem;
  width: 10.4rem;
  height: 9.5rem;

  border: 0.1rem solid ${theme.colors.gray200};
  border-radius: 0.5rem;
`;

const DetailContainer = styled.div`
  width: 100%;
`;

const DetailTitle = styled.h3`
  margin-top: 1.1rem;
  margin-left: 1.4rem;

  ${theme.fonts.caption1};

  > span {
    margin-left: 3.5rem;
    ${theme.fonts.caption1};
    font-weight: 500;
    color: ${theme.colors.green};
  }
`;

const DetailOptions = styled.ul`
  margin-top: 1.1rem;
  margin-left: 3rem;
  list-style: disc outside;
  ${theme.fonts.caption1};
  font-weight: 500;
  color: #0a0909;
  > li:last-child {
    margin-top: 0.3rem;
  }
`;
