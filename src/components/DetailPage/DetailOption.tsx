import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components";

export default function DetailBox() {
  return (
    <div>
      <SelectedSetDetail>
        <SelectedSetName>라지 세트 (1)</SelectedSetName>
        <SelectedSetDividingLine></SelectedSetDividingLine>
        <SelectedOptionWrap>
          <SelectedOptionName>• 사이드 - 후렌치 후라이</SelectedOptionName>
          <SelectedOptionName>• 음료 - 코카콜라 </SelectedOptionName>
        </SelectedOptionWrap>
        <ChangeOptionBtn type="button">옵션 변경</ChangeOptionBtn>
      </SelectedSetDetail>
    </div>
  );
}

const SelectedSetDetail = styled.article`
  width: 33.5rem;
  height: 14.7rem;

  margin: 2rem 2rem 2.8rem 2rem;

  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;

  background-color: ${theme.colors.white};
`;

const SelectedSetName = styled.div`
  font-size: ${theme.fonts.subtitle2};

  margin: 1.2rem auto 0.394rem 1rem;
`;

const SelectedOptionWrap = styled.div``;

const SelectedOptionName = styled.div`
  height: 2rem;

  margin-left: 1rem;
  margin-bottom: 0.3rem;

  font-size: ${theme.fonts.caption2};

  display: flex;
  align-items: center;
`;

const SelectedSetDividingLine = styled.hr`
  width: 31.5rem;
  color: #d1d1d1;

  margin: 0rem 1rem 0.706rem 1rem;

  /* 왜 아래 같이 하면 마진이 자동으로 들어갈까! */
  /* display: flex;
  justify-content: center; */
`;

const CountSelectedSetWrap = styled.div`
  margin: 0.9rem 0.8rem 1.3rem auto;
  display: flex;
`;

const RemoveSelectedSetBtn = styled.button`
  width: 4rem;
  height: 4rem;

  padding: 0;
  border-width: 0;

  border-radius: 0.5rem 0rem 0rem 0.5rem;
  border: 0.1rem solid ${theme.colors.gray600};

  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const RemoveSetImg = styled.img``;

const CountedSetNum = styled.div`
  width: 3.8rem;
  height: 3.8rem;

  border-top: 0.1rem solid ${theme.colors.gray600};
  border-bottom: 0.1rem solid ${theme.colors.gray600};

  font-size: ${theme.fonts.subtitle1};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddSelectedSetBtn = styled.button`
  width: 4rem;
  height: 4rem;

  border-radius: 0rem 0.5rem 0.5rem 0rem;
  border: 0.1rem solid ${theme.colors.gray600};

  background-color: ${theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const AddSetImg = styled.img``;

const ChangeOptionBtn = styled.button`
  width: 31.1rem;
  height: 3.9rem;

  border: 0.1rem solid #545454;
  border-radius: 1rem;

  margin: 1rem 1.2rem 1.2rem 1.2rem;

  font-size: ${theme.fonts.caption1};

  text-align: center;

  background-color: ${theme.colors.white};

  cursor: pointer;
`;
