import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const AddressTimeContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  margin-bottom: 15px;

  background-color: ${theme.colors.white};
  border-radius: 5px;
  > h1 {
    margin-left: 10px;
    ${theme.fonts.title2};
  }

  > h2 {
    margin-left: 15px;
    margin-top: 3px;
    ${theme.fonts.body2};
    font-weight: 400;
    color: #6d6d6d;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
    margin: 0px 12px;
    margin-top: 13px;

    border: 1px solid #545454;
    border-radius: 10px;

    cursor: pointer;
  }
`;

export default function AddressAndTime() {
  return (
    <div>
      <AddressTimeContainer>
        <h1>이 주소로 배달됩니다.</h1>
        <h2>서울특별시 동대문구 회기동 123-45 101호</h2>
        <button>변경</button>
      </AddressTimeContainer>
      <AddressTimeContainer>
        <h1>예상 배달 시간</h1>
        <h2>2022/01/11 07:54</h2>
        <button>변경</button>
      </AddressTimeContainer>
    </div>
  );
}
