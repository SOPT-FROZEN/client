// 결제페이지
import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import PaymentMethod from "../components/PayPage/PaymentMethodContainer";

const PaymentBackground = styled.div`
  width: 375px;
  height: auto;
  background-color: ${theme.colors.bg};
`;

const PayTitle = styled.h1`
  ${theme.fonts.title1}
  font-size: 20px;
  color: ${theme.colors.gray800};
  padding: 17.2px 0 35px 20px;
`;

const PaymentButtonWrapper = styled.div`
  width: 375px;
  height: 205px;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalPriceWrapper = styled.div`
  width: 335px;
  height: 20px;
  margin: 28px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TotalPriceTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;
const TotalPrice = styled.span`
  color: ${theme.colors.green};
  font-size: 22px;
  font-weight: bold;
`;
const DetailPriceWrapper = styled.div`
  width: 335px;
  height: 20px;
  margin: 2px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DetailPriceTitle = styled.h1`
  font-size: 16px;
  color: ${theme.colors.gray800};
`;

const DetailPrice = styled.span`
  color: ${theme.colors.green};
  font-size: 22px;
  font-weight: bold;
`;
const PaymentButton = styled.div`
  background-color: ${theme.colors.red};
  ${theme.fonts.title2}
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 50px;
  margin: 24px 20px 33px 20px;
  color: ${theme.colors.white};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
export default function PayPage() {
  const price = 9900;
  const priceRegex = /\B(?=(\d{3})+(?!\d))/g;
  const totalPrice: string = price.toString().replace(priceRegex, ",");
  const detailPrice: string = price.toString().replace(priceRegex, ",");
  return (
    <>
      <PaymentBackground>
        <PayTitle>결제하기</PayTitle>
        <PaymentMethod />
      </PaymentBackground>
      <PaymentButtonWrapper>
        <TotalPriceWrapper>
          <TotalPriceTitle>총액</TotalPriceTitle>
          <TotalPrice>￦ {totalPrice}</TotalPrice>
        </TotalPriceWrapper>
        <DetailPriceWrapper>
          <DetailPriceTitle>라지 세트 (1)</DetailPriceTitle>
          <DetailPrice>￦ {detailPrice}</DetailPrice>
        </DetailPriceWrapper>
        <PaymentButton>결제</PaymentButton>
      </PaymentButtonWrapper>
    </>
  );
}
