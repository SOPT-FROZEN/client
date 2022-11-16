// 장바구니 페이지
import React from "react";
import styled from "styled-components";
import AddressAndTime from "../components/CartPage/AddressAndTime";
import Cards from "../components/CartPage/Cards";
import theme from "../styles/theme";

const CartWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 17.2px 20px;
  padding-bottom: 0px;

  min-height: 100vh;

  background-color: ${theme.colors.bg};
`;

const Title = styled.header`
  margin-bottom: 35px;

  ${theme.fonts.title1};
`;

const AddBtn = styled.button`
  margin: 10px;
  padding: 10px;
  margin-bottom: 42px;

  background-color: ${theme.colors.gray300};
  border: 1px solid #a5a5a5;
  border-radius: 10px;

  ${theme.fonts.caption1};
  color: ${theme.colors.gray700};
  cursor: pointer;
`;

const OkBtn = styled.button`
  height: 50px;

  padding: 10px;
  margin-top: 15px;
  margin-bottom: 24px;

  background: #d14938;
  border-radius: 10px;
  filter: drop-shadow(0px 3px 13px rgba(0, 0, 0, 0.25));

  color: ${theme.colors.white};
  ${theme.fonts.title2};

  cursor: pointer;
`;

export default function CartPage() {
  return (
    <CartWrapper>
      <Title>장바구니</Title>
      <Cards />
      <AddBtn>항목 추가</AddBtn>
      <AddressAndTime />
      <OkBtn>주문확인</OkBtn>
    </CartWrapper>
  );
}
