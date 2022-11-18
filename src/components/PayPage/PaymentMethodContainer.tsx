import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

export default function PaymentMethodContainer() {
  return (
    <PaymentMethodWrapper>
      <PaymentMethodFrame>
        <PaymentMethodTitle>온라인 결제</PaymentMethodTitle>
        <PaymentMethod type="button">
          <ChoosedPaymentMethod type="button" />
          <PaymentText>신용카드/간편결제/기타*</PaymentText>
        </PaymentMethod>
        <PaymentMethodTitle>현장 결제</PaymentMethodTitle>
        <PaymentMethod type="button">
          <ChoosePaymentMethod type="button" />
          <PaymentText>현금</PaymentText>
        </PaymentMethod>
        <PaymentMethod type="button">
          <ChoosePaymentMethod type="button" />
          <PaymentText>5만원권</PaymentText>
        </PaymentMethod>
        <PaymentMethod type="button">
          <ChoosePaymentMethod type="button" />
          <PaymentText>수표</PaymentText>
        </PaymentMethod>
        <PaymentMethod type="button">
          <ChoosePaymentMethod type="button" />
          <PaymentText>카드(현장 단말기 결제)</PaymentText>
        </PaymentMethod>
      </PaymentMethodFrame>
      <CashReceiptButton type="button">
        <ChoosePaymentMethod type="button" />
        <CashReceipText>현금영수증</CashReceipText>
      </CashReceiptButton>
    </PaymentMethodWrapper>
  );
}

const PaymentMethodWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentMethodFrame = styled.article`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  width: 335px;
  height: 385px;
  margin: 0 20px;
`;

const PaymentMethodTitle = styled.h1`
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
  background-color: ${theme.colors.red};
  margin-right: 10px;
  border: none;
`;

const ChoosePaymentMethod = styled.h2`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: ${theme.colors.gray100};
  margin-right: 10px;
`;

const PaymentText = styled.span`
  color: #545454;
  ${theme.fonts.caption1};
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
  padding-left: 30px;
`;

const CashReceipText = styled.span`
  color: #545454;
  ${theme.fonts.caption1};
`;
