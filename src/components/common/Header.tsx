import React from "react";
import styled from "styled-components";
import { BannerImage } from "../../assets/image/asset";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderImg src={BannerImage} alt="상단바 이미지" />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  position: sticky;
  top: 0;

  width: 100%;
`;

const HeaderImg = styled.img`
  width: 100%;
  background-image: ${BannerImage};

  cursor: pointer;
`;
