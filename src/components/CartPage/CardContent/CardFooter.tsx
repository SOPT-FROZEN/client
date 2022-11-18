import React from "react";
import styled from "styled-components";
import { CartMinusIcon, CartPlusIcon } from "../../../assets/image/asset";
import theme from "../../../styles/theme";

const CardContentFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 13px 5px;
  padding-bottom: 0px;
  > button {
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
  }

  > div {
    display: flex;
    align-items: center;
  }

  > div button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 38px;
    height: 38px;

    border: 1px solid ${theme.colors.gray600};
    cursor: pointer;

    > img {
      width: 16px;
      height: 16px;
    }
  }

  > div .minus {
    border-radius: 5px 0px 0px 5px;
    > img {
      height: 2px;
    }
  }

  > div .amount {
    width: 40px;
    border-left: 0px;
    border-right: 0px;

    color: ${theme.colors.black};
    ${theme.fonts.subtitle1};

    cursor: auto;
  }

  > div .plus {
    border-radius: 0px 5px 5px 0px;
  }
`;
export default function CardFooter(detail: { amount: number }) {
  return (
    <CardContentFooter>
      <button>옵션 변경</button>
      <div>
        <button className="minus">
          <img src={CartMinusIcon} alt="빼기버튼 이미지" />
        </button>
        <button className="amount">{detail.amount}</button>
        <button className="plus">
          <img src={CartPlusIcon} alt="더하기버튼 이미지" />
        </button>
      </div>
    </CardContentFooter>
  );
}
