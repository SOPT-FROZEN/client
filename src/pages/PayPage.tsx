// 결제페이지
import React from "react";
import styled from "styled-components";

const PaymentBackground = styled.div`
  width: 375px;
  height: auto;
  background-color: #f3f3f3;
`;

const PayTitle = styled.h1`
  font-size: 20px;
  color: #0a0909;
  padding: 17.2px 0 35px 20px;
  font-weight: bold;
`;

const PaymentMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentMethodFrame = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 335px;
  height: 385px;
  margin: 0 20px;
`;

const PaymentMethodTitle = styled.div`
  font-size: 16px;
  margin: 21px 0 16px 20px;
  font-weight: bold;
`;

const PaymentMethod = styled.button`
  width: auto;
  height: atuo;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: 1px solid #545454;
  border-radius: 10px;
  margin: 0 0 16px 20px;
`;

const ChoosedPaymentMethod = styled.button`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: #c92a1f;
  margin-right: 10px;
  border: none;
`;

const ChoosePaymentMethod = styled.div`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: #f3f3f3;
  margin-right: 10px;
`;

const PaymentText = styled.span`
  color: #545454;
  font-size: 14px;
`;

const CashReceiptButton = styled.button`
  width: 335px;
  height: 41px;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  margin: 16px 20px;
  border-radius: 5px;
`;

const CashReceipText = styled.span`
  color: #545454;
  font-size: 14px;
  font-weight: Semibold;
`;

const PaymentButtonWrapper = styled.div`
  width: 375px;
  height: 205px;
  background-color: white;
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
  color: #59842a;
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
  color: #0a0909;
`;

const DetailPrice = styled.span`
  color: #59842a;
  font-size: 22px;
  font-weight: bold;
`;
const PaymentButton = styled.div`
  background-color: #d14938;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 50px;
  margin: 24px 20px 33px 20px;
  color: white;
  font-size: 18px;
  font-weight: bold;
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
        <PaymentMethodWrapper>
          <PaymentMethodFrame>
            <PaymentMethodTitle>온라인 결제</PaymentMethodTitle>
            <PaymentMethod>
              <ChoosedPaymentMethod />
              <PaymentText>신용카드/간편결제/기타*</PaymentText>
            </PaymentMethod>
            <PaymentMethodTitle>현장 결제</PaymentMethodTitle>
            <PaymentMethod>
              <ChoosePaymentMethod />
              <PaymentText>현금</PaymentText>
            </PaymentMethod>
            <PaymentMethod>
              <ChoosePaymentMethod />
              <PaymentText>5만원권</PaymentText>
            </PaymentMethod>
            <PaymentMethod>
              <ChoosePaymentMethod />
              <PaymentText>수표</PaymentText>
            </PaymentMethod>
            <PaymentMethod>
              <ChoosePaymentMethod />
              <PaymentText>카드(현장단말기 결제)</PaymentText>
            </PaymentMethod>
          </PaymentMethodFrame>
          <CashReceiptButton>
            <ChoosePaymentMethod />
            <CashReceipText>현금영수증</CashReceipText>
          </CashReceiptButton>
        </PaymentMethodWrapper>
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
