// 장바구니 페이지
import React from "react";
import styled from "styled-components";
import { CartCloseIcon, CartMenuImage } from "../assets/image/asset";
import theme from "../styles/theme";

const CartWrapper = styled.section`
  padding: 17.2px 20px;
  padding-bottom: 0px;

  min-height: 100vh;

  background-color: ${theme.colors.bg};
`;

const Title = styled.header`
  margin-bottom: 35px;

  font: ${theme.fonts.title1};
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;

  min-height: 224px;

  padding: 12px 10px;
  padding-bottom: 15px;

  background-color: ${theme.colors.white};
  border-radius: 5px;
`;

const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 5px;
  width: 100%;

  > h1 {
    font: ${theme.fonts.subtitle2};
  }
  > h2 {
    color: ${theme.colors.green};
    font: ${theme.fonts.subtitle1};
  }
`;

const CardContent = styled.div`
  border-top: 1px solid ${theme.colors.gray200};

  > img {
    margin-top: 25px;
    width: 104px;
    height: 95px;

    border: 1px solid ${theme.colors.gray200};
    border-radius: 5px;
  }
`;

export default function CartPage() {
  return (
    <CartWrapper>
      <Title>장바구니</Title>
      <Card>
        <CardHeader>
          <h1>트리플 치즈 버거</h1>
          <h2>₩ 9,900</h2>
        </CardHeader>
        <CardContent>
          <img src={CartMenuImage} alt="메뉴이미지" />
          <button>
            <img src={CartCloseIcon} alt="닫기버튼" />
          </button>
        </CardContent>
      </Card>
    </CartWrapper>
  );
}
