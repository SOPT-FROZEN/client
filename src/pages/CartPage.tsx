// 장바구니 페이지
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddressAndTime from "../components/CartPage/AddressAndTime";
import Cards from "../components/CartPage/Cards";
import theme from "../styles/theme";
import { CartEmpty } from "../assets/image/asset";
import { getCartAPI } from "../util/api";
import { response } from "msw";

const CartWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 17.2px 20px;
  padding-bottom: 0px;

  min-height: 100vh; // 수정 요망

  background-color: ${theme.colors.bg};
`;

const Title = styled.header`
  margin-bottom: 25px;

  ${theme.fonts.title1};
`;

const EmptyContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 132px;
  margin-bottom: 226px;

  > img {
    width: 145px;
    height: 108px;
  }
`;

const AddBtnContainer = styled.button`
  width: 100%;
  margin-top: 10px;
  > button {
    width: 100%;
    padding: 10px;
    margin-bottom: 42px;

    background-color: ${theme.colors.gray300};
    border: 1px solid #a5a5a5;
    border-radius: 10px;

    ${theme.fonts.caption1};
    color: ${theme.colors.gray700};
    cursor: pointer;
  }
`;

const OkBtn = styled.button`
  height: 50px;
  width: 100%;

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
  details?: iSet[];
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
