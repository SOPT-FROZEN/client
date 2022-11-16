// 장바구니 페이지
import React from "react";
import styled from "styled-components";
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

const AddressTimeContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  margin-bottom: 15px;

  background-color: ${theme.colors.white};
  border-radius: 5px;
  > h1 {
    margin-left: 10px;
    ${theme.fonts.title2};
  }

  > h2 {
    margin-left: 15px;
    margin-top: 3px;
    ${theme.fonts.body2};
    font-weight: 400;
    color: #6d6d6d;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
    margin: 0px 12px;
    margin-top: 13px;

    border: 1px solid #545454;
    border-radius: 10px;

    cursor: pointer;
  }
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
      <AddressTimeContainer>
        <h1>이 주소로 배달됩니다.</h1>
        <h2>서울특별시 동대문구 회기동 123-45 101호</h2>
        <button>변경</button>
      </AddressTimeContainer>
      <AddressTimeContainer>
        <h1>예상 배달 시간</h1>
        <h2>2022/01/11 07:54</h2>
        <button>변경</button>
      </AddressTimeContainer>
      <OkBtn>주문확인</OkBtn>
    </CartWrapper>
  );
}
