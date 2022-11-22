import React from "react";
import styled from "styled-components";
import { CartMinusIcon, CartPlusIcon } from "../../../assets/image/asset";
import theme from "../../../styles/theme";

export default function CardFooter(detail: { amount: number }) {
  return (
    <CardContentFooter>
      <OptionButton>옵션 변경</OptionButton>
      {/* 공용 컴포넌트 */}
    </CardContentFooter>
  );
}

const CardContentFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.3rem 0.5rem;
  padding-bottom: 0rem;
`;

const OptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  width: 16.1rem;
  height: 3.9rem;

  border: 0.1rem solid #545454;
  border-radius: 1rem;

  ${theme.fonts.caption1};
  color: #545454;

  cursor: pointer;
`;
