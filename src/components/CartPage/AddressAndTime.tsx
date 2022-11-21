import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

export default function AddressAndTime() {
  return (
    <AddressTimeWrapper>
      <AddressTimeContainer>
        <AddressTimeTitle>이 주소로 배달됩니다.</AddressTimeTitle>
        <AddressTimeSubtitle>서울특별시 동대문구 회기동 123-45 101호</AddressTimeSubtitle>
        <ChangeBtn>변경</ChangeBtn>
      </AddressTimeContainer>
      <AddressTimeContainer>
        <AddressTimeTitle>예상 배달 시간</AddressTimeTitle>
        <AddressTimeSubtitle>2022/01/11 07:54</AddressTimeSubtitle>
        <ChangeBtn>변경</ChangeBtn>
      </AddressTimeContainer>
    </AddressTimeWrapper>
  );
}

const AddressTimeWrapper = styled.section``;

const AddressTimeContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  margin-bottom: 15px;

  background-color: ${theme.colors.white};
  border-radius: 5px;
`;

const AddressTimeTitle = styled.h1`
  margin-left: 10px;
  ${theme.fonts.title2};
`;

const AddressTimeSubtitle = styled.h2`
  margin-left: 15px;
  margin-top: 3px;
  ${theme.fonts.body2};
  font-weight: 400;
  color: #6d6d6d;
`;

const ChangeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  margin: 0px 12px;
  margin-top: 13px;

  border: 1px solid #545454;
  border-radius: 10px;

  cursor: pointer;
`;
