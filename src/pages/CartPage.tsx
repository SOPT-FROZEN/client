// 장바구니 페이지
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddressAndTime from "../components/CartPage/AddressAndTime";
import Cards from "../components/CartPage/Cards";
import theme from "../styles/theme";
import { CartEmpty } from "../assets/image/asset";
import { getCartAPI } from "../util/api";
import { response } from "msw";

export interface iSet {
  setId: number;
  set: string;
  price: number;
  amount: number;
}
export interface iOrder {
  menuId: number;
  title: string;
  total: number;
  details: iSet[];
}

export default function CartPage() {
  const [orders, setOrders] = useState<iOrder[]>([]);

  useEffect(() => {
    getCartAPI().then((result) => setOrders(result.data));
  }, []);

  return (
    <CartWrapper>
      <Title>장바구니</Title>
      {orders.length ? (
        <div>
          <Cards orders={orders} setOrders={setOrders} />
          <AddBtnContainer>
            <button>항목 추가</button>
          </AddBtnContainer>
          <AddressAndTime />
          <OkBtn>주문 확인</OkBtn>
        </div>
      ) : (
        <div>
          <EmptyContainer>
            <img src={CartEmpty} alt="빈 장바구니 이미지" />
          </EmptyContainer>
          <OkBtn>항목 추가하기</OkBtn>
        </div>
      )}
    </CartWrapper>
  );
}

const CartWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1.72rem 2rem;
  padding-bottom: 0rem;

  min-height: 100vh; // 수정 요망

  background-color: ${theme.colors.bg};
`;

const Title = styled.header`
  margin-bottom: 2.5rem;

  ${theme.fonts.title1};
`;

const EmptyContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 13.2rem;
  margin-bottom: 22.6rem;

  > img {
    width: 14.5rem;
    height: 10.8rem;
  }
`;

const AddBtnContainer = styled.button`
  width: 100%;
  margin-top: 1rem;
  > button {
    width: 100%;
    padding: 1rem;
    margin-bottom: 4.2rem;

    background-color: ${theme.colors.gray300};
    border: 0.1rem solid #a5a5a5;
    border-radius: 1rem;

    ${theme.fonts.caption1};
    color: ${theme.colors.gray700};
    cursor: pointer;
  }
`;

const OkBtn = styled.button`
  height: 5rem;
  width: 100%;

  padding: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 2.4rem;

  background: #d14938;
  border-radius: 1rem;
  filter: drop-shadow(0rem 0.3rem 1.3rem rgba(0, 0, 0, 0.25));

  color: ${theme.colors.white};
  ${theme.fonts.title2};

  cursor: pointer;
`;
