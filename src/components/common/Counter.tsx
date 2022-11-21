import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { CartMinusIcon, CartPlusIcon } from "../../assets/image/asset";
import theme from "../../styles/theme";
interface iCountProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function Counter({ count, setCount }: iCountProps) {
  const onClickPlusBtn = () => {
    setCount((prev) => (prev += 1));
  };

  const onClickMinusBtn = () => {
    if (count > 0) {
      setCount((prev) => (prev -= 1));
    }
  };

  return (
    <CounterWrap>
      <MinusBtn className="minus" onClick={onClickMinusBtn}>
        <MinusImg src={CartMinusIcon} alt="빼기버튼 이미지" />
      </MinusBtn>
      <AmountBtn className="amount">{count}</AmountBtn>
      <PlusBtn className="plus" onClick={onClickPlusBtn}>
        <PlusImg src={CartPlusIcon} alt="더하기버튼 이미지" />
      </PlusBtn>
    </CounterWrap>
  );
}

const CounterWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;
  border: 1px solid ${theme.colors.gray600};
`;

const MinusBtn = styled(Button)`
  border-radius: 5px 0px 0px 5px;
  cursor: pointer;
`;

const MinusImg = styled.img`
  width: 16px;
  height: 2px;
`;

const AmountBtn = styled(Button)`
  width: 40px;
  border-left: 0px;
  border-right: 0px;
  border-radius: 0px;

  color: ${theme.colors.black};
  ${theme.fonts.subtitle1};

  cursor: auto;
`;

const PlusBtn = styled(Button)`
  border-radius: 0px 5px 5px 0px;
`;

const PlusImg = styled(MinusImg)`
  height: 16px;
`;
