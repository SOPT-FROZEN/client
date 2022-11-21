import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { AddSet, RemoveSet } from "../../assets/image/asset";
import theme from "../../styles/theme";

interface iCountProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function Counter({ count, setCount }: iCountProps) {
  return (
    <CountSelectedSetWrap>
      <RemoveSelectedSetBtn type="button">
        <RemoveSetImg src={RemoveSet}></RemoveSetImg>
      </RemoveSelectedSetBtn>

      <CountedSetNum>{count}</CountedSetNum>

      <AddSelectedSetBtn type="button">
        <AddSetImg src={AddSet}></AddSetImg>
      </AddSelectedSetBtn>
    </CountSelectedSetWrap>
  );
}
const CountSelectedSetWrap = styled.div`
  margin: 9px 8px 13px auto;
  display: flex;
`;

const RemoveSelectedSetBtn = styled.button`
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

const RemoveSetImg = styled.img``;

const CountedSetNum = styled.div`
  width: 38px;
  height: 38px;

  border-top: 1px solid ${theme.colors.gray600};
  border-bottom: 1px solid ${theme.colors.gray600};

  font-size: ${theme.fonts.subtitle1};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddSelectedSetBtn = styled.button`
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
