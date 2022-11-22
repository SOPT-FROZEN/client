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

  width: 3.8rem;
  height: 3.8rem;
  border: 0.1rem solid ${theme.colors.gray600};
  cursor: pointer;
`;

const MinusBtn = styled(Button)`
  border-radius: 0.5rem 0rem 0rem 0.5rem;
`;

const MinusImg = styled.img`
  width: 1.6rem;
  height: 0.2rem;
`;

const AmountBtn = styled(Button)`
  width: 4rem;
  border-left: 0rem;
  border-right: 0rem;
  border-radius: 0rem;

  color: ${theme.colors.black};
  ${theme.fonts.subtitle1};

  cursor: auto;
`;

const PlusBtn = styled(Button)`
  border-radius: 0rem 0.5rem 0.5rem 0rem;
`;

const PlusImg = styled(MinusImg)`
  height: 1.6rem;
`;
