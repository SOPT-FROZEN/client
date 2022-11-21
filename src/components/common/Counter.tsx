import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { AddSet, RemoveSet } from "../../assets/image/asset";
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
      <PlusBtn onClick={onClickPlusBtn} type="button">
        <PlusBtnImg src={RemoveSet} alt="빼기버튼 이미지" />
      </PlusBtn>

      <CountNumber>{count}</CountNumber>

      <MinusBtn onClick={onClickMinusBtn} type="button">
        <AddSetImg src={AddSet} alt="더하기버튼 이미지" />
      </MinusBtn>
    </CounterWrap>
  );
}
const CounterWrap = styled.div`
  margin: 9px 8px 13px auto;
  display: flex;
`;

const PlusBtn = styled.button`
  width: 40px;
  height: 40px;

  padding: 0;
  border-width: 0;

  border-radius: 5px 0px 0px 5px;
  border: 1px solid ${theme.colors.gray600};

  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusBtnImg = styled.img``;

const CountNumber = styled.div`
  width: 38px;
  height: 38px;

  border-top: 1px solid ${theme.colors.gray600};
  border-bottom: 1px solid ${theme.colors.gray600};

  font-size: ${theme.fonts.subtitle1};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MinusBtn = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 0px 5px 5px 0px;
  border: 1px solid ${theme.colors.gray600};

  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddSetImg = styled.img``;
