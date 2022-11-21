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

  padding: 13px 5px;
  padding-bottom: 0px;
`;

const OptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  width: 161px;
  height: 39px;

  border: 1px solid #545454;
  border-radius: 10px;

  ${theme.fonts.caption1};
  color: #545454;

  cursor: pointer;
`;
