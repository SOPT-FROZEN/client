// 메뉴 상세보기 페이지
import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import {
  BurgerImage,
  BackIcon,
  AllergyPig,
  AllergyCow,
  AllergyChicken,
  AllergyLettuce,
  AllergyTomato,
  RemoveSet,
  AddSet,
} from "../assets/image/asset";

export default function DetailPage() {
  const Allergy = [
    {
      name: "pig",
      src: AllergyPig,
      altName: "돼지고기 알러지 이미지",
    },
    {
      name: "cow",
      src: AllergyCow,
      altName: "소고기 알러지 이미지",
    },
    {
      name: "chicken",
      src: AllergyChicken,
      altName: "닭고기 알러지 이미지",
    },
    {
      name: "lettuce",
      src: AllergyLettuce,
      altName: "양배추 알러지 이미지",
    },
    {
      name: "tomato",
      src: AllergyTomato,
      altName: "토마토 알러지 이미지",
    },
  ];

  const data = ["pig", "cow", "chicken", "lettuce"];

  return (
    <DetailBackground>
      <DetailTitle>
        <DetailBackIcon src={BackIcon}></DetailBackIcon>
        버거 & 세트
      </DetailTitle>
      <DetailDividingLine></DetailDividingLine>
      <DetailMenuImg src={BurgerImage} alt="트리플 치즈 버거 이미지"></DetailMenuImg>
      <DetailInfoBoard>
        <DetailMenuName>트리플 치즈 버거</DetailMenuName>
        <DetailAllergyInfo>
          {Allergy.map(
            (icon) =>
              data.includes(icon.name) && (
                <DetailAllergyIcon key={icon.name} src={icon.src} alt={icon.altName}></DetailAllergyIcon>
              ),
          )}
        </DetailAllergyInfo>
      </DetailInfoBoard>

      <AddSetTitle>세부 항목을 선택하세요</AddSetTitle>

      <AddSetBoard>
        <AddSetBoardTitleWrap>
          <AddSetBoardTitle>라지 세트</AddSetBoardTitle>
        </AddSetBoardTitleWrap>

        <AddSetBoardPrice>₩ 9,900</AddSetBoardPrice>
        <CountSelectedSetWrap>
          <RemoveSelectedSetBtn type="button">
            <RemoveSetImg src={RemoveSet}></RemoveSetImg>
          </RemoveSelectedSetBtn>

          <CountedSetNum>1</CountedSetNum>

          <AddSelectedSetBtn type="button">
            <AddSetImg src={AddSet}></AddSetImg>
          </AddSelectedSetBtn>
        </CountSelectedSetWrap>
      </AddSetBoard>
      <AddSetBoard>
        <AddSetBoardTitleWrap>
          <AddSetBoardTitle>세트</AddSetBoardTitle>
        </AddSetBoardTitleWrap>
        <AddSetBoardPrice>₩ 9,300</AddSetBoardPrice>

        <CountSelectedSetWrap>
          <RemoveSelectedSetBtn type="button">
            <RemoveSetImg src={RemoveSet}></RemoveSetImg>
          </RemoveSelectedSetBtn>

          <CountedSetNum>1</CountedSetNum>

          <AddSelectedSetBtn type="button">
            <AddSetImg src={AddSet}></AddSetImg>
          </AddSelectedSetBtn>
        </CountSelectedSetWrap>
      </AddSetBoard>
      <AddSetBoard>
        <AddSetBoardTitleWrap>
          <AddSetBoardTitle>단품</AddSetBoardTitle>
        </AddSetBoardTitleWrap>
        <AddSetBoardPrice>₩ 7,500</AddSetBoardPrice>

        <CountSelectedSetWrap>
          <RemoveSelectedSetBtn type="button">
            <RemoveSetImg src={RemoveSet}></RemoveSetImg>
          </RemoveSelectedSetBtn>

          <CountedSetNum>1</CountedSetNum>

          <AddSelectedSetBtn type="button">
            <AddSetImg src={AddSet}></AddSetImg>
          </AddSelectedSetBtn>
        </CountSelectedSetWrap>
      </AddSetBoard>

      <SelectedSetDetail>
        <SelectedSetName>라지 세트 (1)</SelectedSetName>
        <SelectedSetDividingLine></SelectedSetDividingLine>
        <SelectedOptionWrap>
          <SelectedOptionName>• 사이드 - 후렌치 후라이</SelectedOptionName>
          <SelectedOptionName>• 음료 - 코카콜라 </SelectedOptionName>
        </SelectedOptionWrap>
        <ChangeOptionBtn type="button">옵션 변경</ChangeOptionBtn>
      </SelectedSetDetail>

      <AddToCartModal>
        <AddToCartPriceWrap>
          <AddToCartPriceTitle>주문 금액</AddToCartPriceTitle>
          <AddToCartTotalPrice>₩ 9,900</AddToCartTotalPrice>
        </AddToCartPriceWrap>
        <AddToCartSetInfoWrap>
          <AddToCartSetName>라지 세트 (1)</AddToCartSetName>
          <AddToCartSetPrice>₩ 9,900</AddToCartSetPrice>
        </AddToCartSetInfoWrap>
        <AddToCartButton type="button">장바구니에 담기</AddToCartButton>
      </AddToCartModal>
    </DetailBackground>
  );
}

const DetailBackground = styled.section`
  width: 375px;
  height: auto;
  background-color: ${theme.colors.gray100};
`;

const DetailTitle = styled.header`
  height: 24px;

  padding: 10px 0px;

  margin-left: 20px;

  font-size: ${theme.fonts.body3};

  display: flex;
  align-items: center;
`;

const DetailBackIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 5px 9px 5px 4px;
`;

const DetailDividingLine = styled.hr`
  width: 335px;
  color: #d1d1d1;

  margin: 0px 20px;
`;

const DetailMenuImg = styled.img`
  width: 335px;
  height: 213px;

  margin: 10px 20px 11px 20px;

  border-radius: 5px;
`;

const DetailInfoBoard = styled.article`
  width: 335px;
  height: 68px;

  background-color: ${theme.colors.white};

  border-radius: 5px;

  margin: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailMenuName = styled.div`
  font-size: ${theme.fonts.title3};

  margin-top: 10px;

  display: flex;
  justify-content: center;
`;

const DetailAllergyInfo = styled.div`
  width: 104.31px;
  height: 20px;

  margin-top: 7px;
  margin-bottom: 11px;

  display: flex;
  justify-content: center;
`;

const DetailAllergyIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const AddSetTitle = styled.h1`
  font-size: ${theme.fonts.title2};

  margin: 20px 0px 14px 26px;
`;

const AddSetBoard = styled.article`
  width: 335px;
  height: 60px;

  overflow: hidden;

  border-radius: 5px;
  margin: 14px 20px 10px 20px;

  background-color: ${theme.colors.white};

  display: flex;
`;

const AddSetBoardTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const AddSetBoardTitle = styled.div`
  width: 82px;
  height: 30px;

  margin-left: 10px;

  font-size: ${theme.fonts.body1};

  border-right: 1px solid ${theme.colors.gray200};

  display: flex;
  align-items: center;
`;

const AddSetBoardPrice = styled.div`
  height: 20px;

  color: ${theme.colors.green};

  font-size: ${theme.fonts.subtitle1};

  margin: 20px 0px 20px 11px;

  display: flex;
  align-items: center;
`;

const SelectedSetDetail = styled.article`
  width: 335px;
  height: 147px;

  margin: 20px 20px 28px 20px;

  display: flex;
  flex-direction: column;

  border-radius: 5px;

  background-color: ${theme.colors.white};
`;

const SelectedSetName = styled.div`
  font-size: ${theme.fonts.subtitle2};

  margin: 12px auto 3.94px 10px;
`;

const SelectedOptionWrap = styled.div``;

const SelectedOptionName = styled.div`
  height: 20px;

  margin-left: 10px;
  margin-bottom: 3px;

  font-size: ${theme.fonts.caption2};

  display: flex;
  align-items: center;
`;

const SelectedSetDividingLine = styled.hr`
  width: 315px;
  color: #d1d1d1;

  margin: 0px 10px 7.06px 10px;

  /* 왜 아래 같이 하면 마진이 자동으로 들어갈까! */
  /* display: flex;
  justify-content: center; */
`;

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

const ChangeOptionBtn = styled.button`
  width: 311px;
  height: 39px;

  border: 1px solid #545454;
  border-radius: 10px;

  margin: 10px 12px 12px 12px;

  font-size: ${theme.fonts.caption1};

  text-align: center;

  background-color: ${theme.colors.white};
`;

const AddToCartModal = styled.article`
  width: 335px;
  min-height: 137px;

  padding: 20px;

  position: sticky;
  bottom: 0px;

  border-top: 1px solid #d1d1d1;

  background-color: ${theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddToCartPriceWrap = styled.div`
  margin: 8px auto;

  width: 335px;
  display: flex;
  justify-content: space-between;
`;

const AddToCartPriceTitle = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;

  letter-spacing: -0.5px;
`;

const AddToCartTotalPrice = styled.h1`
  font-weight: 800;
  font-size: 22px;
  line-height: 20px;
  color: ${theme.colors.green};

  letter-spacing: -0.5px;
`;

const AddToCartSetInfoWrap = styled.div`
  margin: 8px auto;
  width: 335px;
  display: flex;
  justify-content: space-between;
`;

const AddToCartSetName = styled.h2`
  font-size: ${theme.fonts.body2};
`;

const AddToCartSetPrice = styled.h2`
  color: ${theme.colors.green};

  font-size: ${theme.fonts.subtitle1};
`;

const AddToCartButton = styled.button`
  width: 335px;
  height: 50px;

  border-radius: 10px;

  color: ${theme.colors.white};
  background-color: ${theme.colors.yellow};
  box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.25);

  font-size: ${theme.fonts.title2};

  margin-top: 18.94px;
  margin-bottom: 6.06px;
`;
