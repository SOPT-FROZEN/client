import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

export default function PaymentMethodContainer() {
  return (
    <PaymentMethodWrapper>
      <PaymentMethodFrame>
        <PaymentMethodTitle>온라인 결제</PaymentMethodTitle>
        <PaymentMethod>
          <ChoosePaymentMethod isClicked={true} />
          <PaymentText>신용카드/간편결제/기타*</PaymentText>
        </PaymentMethod>
        <PaymentMethodTitle>현장 결제</PaymentMethodTitle>
        {["현금", "5만원권", "수표", "카드(현장 단말기 결제)"].map((method, index) => {
          return (
            <PaymentMethod key={index}>
              <ChoosePaymentMethod isClicked={false} />
              <PaymentText>{method}</PaymentText>
            </PaymentMethod>
          );
        })}
      </PaymentMethodFrame>
      <CashReceiptButton>
        <ChoosePaymentMethod isClicked={false} />
        <CashReceipText>현금영수증</CashReceipText>
      </CashReceiptButton>
    </PaymentMethodWrapper>
  );
}

const PaymentMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentMethodFrame = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 0.5rem;
  width: 33.5rem;
  height: 38.5rem;
  margin: 0 2rem;
`;

const PaymentMethodTitle = styled.div`
  font-size: 1.6rem;
  margin: 2.1rem 0 1.6rem 2rem;
  font-weight: bold;
`;

const PaymentMethod = styled.button`
  width: auto;
  height: atuo;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: 0.1rem solid #545454;
  border-radius: 1rem;
  margin: 0 0 1.6rem 2rem;
`;

const ChoosePaymentMethod = styled.div<{ isClicked: boolean }>`
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  background-color: ${({ isClicked }) => (isClicked ? `${theme.colors.red}` : `${theme.colors.gray100}`)};
  margin-right: 1rem;
  border: none;
`;

const PaymentText = styled.span`
  color: #545454;
  ${theme.fonts.caption1};
`;

const CashReceiptButton = styled.button`
  width: 33.5rem;
  height: 4.1rem;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  margin: 1.6rem 2rem;
  border-radius: 0.5rem;
  padding-left: 3rem;
`;

const CashReceipText = styled.span`
  color: #545454;
  ${theme.fonts.caption1};
`;
