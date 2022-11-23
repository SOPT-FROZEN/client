// 메뉴 상세보기 페이지
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { BurgerImage, BackIcon, RemoveSet, AddSet } from "../assets/image/asset";
import Allergy from "../components/common/Allergy";
import { useParams } from "react-router-dom";
import { getMenuDetail } from "../util/api";
import { priceToString } from "../util/priceToString";

export interface iDetailInfo {
  menuId: string;
  menuName: string;
  priceLarge: number;
  priceSet: number;
  priceOnly: number;
  allergy: Array<"pig" | "cow" | "tomato" | "chicken" | "lettuce">;
}

export default function DetailPage() {
  const { menuId } = useParams();
  const [detailInfo, setDetailInfo] = useState<iDetailInfo>({
    menuId: "",
    menuName: "",
    priceLarge: 0,
    priceSet: 0,
    priceOnly: 0,
    allergy: [],
  });

  useEffect(() => {
    {
      menuId && getMenuDetail(menuId).then((result) => setDetailInfo(result.data));
    }
  }, [menuId]);

  return (
    <DetailBackground>
      <DetailTitle>
        <DetailBackIcon src={BackIcon}></DetailBackIcon>
        버거 & 세트
      </DetailTitle>
      <DetailDividingLine></DetailDividingLine>
      <DetailMenuImg src={BurgerImage} alt="트리플 치즈 버거 이미지"></DetailMenuImg>
      <DetailInfoBoard>
        <DetailMenuName>{detailInfo.menuName}</DetailMenuName>
        <DetailAllergyInfo>
          <Allergy allergyData={detailInfo.allergy} />
        </DetailAllergyInfo>
      </DetailInfoBoard>

      <AddSetTitle>세부 항목을 선택하세요</AddSetTitle>

      <AddSetBoard>
        <AddSetBoardTitleWrap>
          <AddSetBoardTitle>라지 세트</AddSetBoardTitle>
        </AddSetBoardTitleWrap>

        <AddSetBoardPrice>₩ {priceToString(detailInfo.priceLarge)}</AddSetBoardPrice>
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
        <AddSetBoardPrice>₩ {priceToString(detailInfo.priceSet)}</AddSetBoardPrice>

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
        <AddSetBoardPrice>₩ {priceToString(detailInfo.priceOnly)}</AddSetBoardPrice>

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
          <AddToCartSetPrice>₩ {priceToString(detailInfo.priceLarge)}</AddToCartSetPrice>
        </AddToCartSetInfoWrap>
        <AddToCartButton type="button">장바구니에 담기</AddToCartButton>
      </AddToCartModal>
    </DetailBackground>
  );
}

const DetailBackground = styled.section`
  width: 37.5rem;
  height: auto;
  background-color: ${theme.colors.gray100};
`;

const DetailTitle = styled.header`
  height: 2.4rem;

  padding: 1rem 0rem;

  margin-left: 2rem;

  font-size: ${theme.fonts.body3};

  display: flex;
  align-items: center;
`;

const DetailBackIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin: 0.5rem 0.9rem 0.5rem 0.4rem;
`;

const DetailDividingLine = styled.hr`
  width: 33.5rem;
  color: #d1d1d1;

  margin: 0rem 2rem;
`;

const DetailMenuImg = styled.img`
  width: 33.5rem;
  height: 21.3rem;

  margin: 1rem 2rem 1.1rem 2rem;

  border-radius: 0.5rem;
`;

const DetailInfoBoard = styled.article`
  width: 33.5rem;
  height: 6.8rem;

  background-color: ${theme.colors.white};

  border-radius: 0.5rem;

  margin: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailMenuName = styled.div`
  font-size: ${theme.fonts.title3};

  margin-top: 1rem;

  display: flex;
  justify-content: center;
`;

const DetailAllergyInfo = styled.div`
  width: 10.431rem;
  height: 2rem;

  margin-top: 0.7rem;
  margin-bottom: 1.1rem;

  display: flex;
  justify-content: center;
`;

const AddSetTitle = styled.h1`
  font-size: ${theme.fonts.title2};

  margin: 2rem 0rem 1.4rem 2.6rem;
`;

const AddSetBoard = styled.article`
  width: 33.5rem;
  height: 6rem;

  overflow: hidden;

  border-radius: 0.5rem;
  margin: 1.4rem 2rem 1rem 2rem;

  background-color: ${theme.colors.white};

  display: flex;
`;

const AddSetBoardTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const AddSetBoardTitle = styled.div`
  width: 8.2rem;
  height: 3rem;

  margin-left: 1rem;

  font-size: ${theme.fonts.body1};

  border-right: 0.1rem solid ${theme.colors.gray200};

  display: flex;
  align-items: center;
`;

const AddSetBoardPrice = styled.div`
  height: 2rem;

  color: ${theme.colors.green};

  font-size: ${theme.fonts.subtitle1};

  margin: 2rem 0rem 2rem 1.1rem;

  display: flex;
  align-items: center;
`;

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

const AddToCartModal = styled.article`
  width: 33.5rem;
  min-height: 13.7rem;

  padding: 2rem;

  position: sticky;
  bottom: 0rem;

  border-top: 0.1rem solid #d1d1d1;

  background-color: ${theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddToCartPriceWrap = styled.div`
  margin: 0.8rem auto;

  width: 33.5rem;
  display: flex;
  justify-content: space-between;
`;

const AddToCartPriceTitle = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 2rem;

  letter-spacing: -0.05rem;
`;

const AddToCartTotalPrice = styled.h1`
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 2rem;
  color: ${theme.colors.green};

  letter-spacing: -0.05rem;
`;

const AddToCartSetInfoWrap = styled.div`
  margin: 0.8rem auto;
  width: 33.5rem;
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
  width: 33.5rem;
  height: 5rem;

  border-radius: 1rem;

  color: ${theme.colors.white};
  background-color: ${theme.colors.yellow};
  box-shadow: 0rem 0.3rem 1.3rem rgba(0, 0, 0, 0.25);

  font-size: ${theme.fonts.title2};

  margin-top: 1.894rem;
  margin-bottom: 0.606rem;

  cursor: pointer;
`;
