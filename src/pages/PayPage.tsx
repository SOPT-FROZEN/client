// 결제페이지
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import PaymentMethod from "../components/PayPage/PaymentMethodContainer";
import { getCartAPI } from "../util/api";
import { iOrder } from "./CartPage";

export default function PayPage() {
  const [receipt, setReceipt] = useState<iOrder[]>([]);
  const [price, setPrice] = useState(0);
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  //const totalPrice: string = price.toString().replace(priceRegex, ",");
  ///const detailPrice: string = price.toString().replace(priceRegex, ",");

  useEffect(() => {
    // receipt/total을 통해서 totalPrice 업데이트
    receipt.map((order) => {
      setPrice((prev) => (prev += order.total));
    });
  }, [receipt]);

  useEffect(() => {
    // 장바구니 정보 불러와서 receipt에 저장
    getCartAPI().then((result) => setReceipt(result.data));
  }, []);

  return (
    <>
      <PaymentBackground>
        <PayTitle>결제하기</PayTitle>
        <PaymentMethod />
      </PaymentBackground>
      <PaymentButtonWrapper>
        <TotalPriceWrapper>
          <TotalPriceTitle>총액</TotalPriceTitle>
          <TotalPrice>￦ {price}</TotalPrice>
        </TotalPriceWrapper>
        <DetailWrapper>
          {receipt.map((order, index) => (
            <DetailPriceWrapper key={index}>
              <DetailPriceTitle>
                {order.title} ({order.details.length})
              </DetailPriceTitle>
              <DetailPrice>￦ {order.total}</DetailPrice>
            </DetailPriceWrapper>
          ))}
        </DetailWrapper>
        <PaymentButton>결제</PaymentButton>
      </PaymentButtonWrapper>
    </>
  );
}

const PaymentBackground = styled.div`
  width: 37.5rem;
  height: auto;
  background-color: ${theme.colors.bg};
`;

const PayTitle = styled.h1`
  ${theme.fonts.title1}
  font-size: 2rem;
  color: ${theme.colors.gray800};
  padding: 1.72rem 0 3.5rem 2rem;
`;

const PaymentButtonWrapper = styled.div`
  width: 37.5rem;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalPriceWrapper = styled.div`
  width: 33.5rem;
  height: 2rem;
  margin-top: 2.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TotalPriceTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
`;

const TotalPrice = styled.span`
  color: ${theme.colors.green};
  font-size: 2.2rem;
  font-weight: bold;
`;

const DetailWrapper = styled.div`
  margin-top: 3rem;
`;

const DetailPriceWrapper = styled.div`
  width: 33.5rem;
  height: 2rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DetailPriceTitle = styled.h1`
  ${theme.fonts.body2};
  color: ${theme.colors.gray800};
`;

const DetailPrice = styled.span`
  color: ${theme.colors.green};
  ${theme.fonts.subtitle1};
`;

const PaymentButton = styled.div`
  background-color: #d14938;
  ${theme.fonts.title2}
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.5rem;
  height: 5rem;
  margin: 2.4rem 2rem 3.3rem 2rem;
  color: ${theme.colors.white};
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
