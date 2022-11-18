import React from "react";
import styled from "styled-components";
import { CartMenuImage } from "../../../assets/image/asset";
import theme from "../../../styles/theme";

const CardContentMenu = styled.article`
  display: flex;

  > img {
    margin-top: 1.3px;
    width: 104px;
    height: 95px;

    border: 1px solid ${theme.colors.gray200};
    border-radius: 5px;
  }

  > div {
    width: 100%;

    > h3 {
      margin-top: 11px;
      margin-left: 14px;

      ${theme.fonts.caption1};
      > span {
        margin-left: 35px;
        ${theme.fonts.caption1};
        font-weight: 500;
        color: ${theme.colors.green};
      }
    }

    > ul {
      margin-top: 11px;
      margin-left: 30px;
      list-style: disc outside;
      ${theme.fonts.caption1};
      font-weight: 500;
      color: #0a0909;
      > li:last-child {
        margin-top: 3px;
      }
    }
  }
`;
export default function CardMenu(detail: { set: string; price: number }) {
  return (
    <CardContentMenu>
      <img src={CartMenuImage} alt="메뉴이미지" />
      <div>
        <h3>
          {detail.set}
          <span>₩ {detail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </h3>
        <ul>
          <li>사이드 - 후렌치 후라이</li>
          <li>음료 - 코카콜라</li>
        </ul>
      </div>
    </CardContentMenu>
  );
}
