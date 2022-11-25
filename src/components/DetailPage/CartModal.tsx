import { useState, useEffect } from "react";
import theme from "../../styles/theme";
import styled from "styled-components";
import { priceToString } from "../../util/priceToString";
import { useParams } from "react-router-dom";
import { getMenuDetail } from "../../util/api";
import { iDetailInfo } from "../../pages/DetailPage";

export interface iProps {
  handler: () => void;
}

export default function CartModal({ handler }: iProps) {
  const { menuId } = useParams();

  const [detailInfo, setDetailInfo] = useState<iDetailInfo>({
    menuId: 0,
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
    <div>
      <AddToCartModal>
        <AddToCartPriceWrap>
          <AddToCartPriceTitle>주문 금액</AddToCartPriceTitle>
          <AddToCartTotalPrice>₩ 9,900</AddToCartTotalPrice>
        </AddToCartPriceWrap>
        <AddToCartSetInfoWrap>
          <AddToCartSetName>라지 세트 (1)</AddToCartSetName>
          <AddToCartSetPrice>₩ {priceToString(detailInfo.priceLarge)}</AddToCartSetPrice>
        </AddToCartSetInfoWrap>
        <AddToCartButton type="button" onClick={handler}>
          장바구니에 담기
        </AddToCartButton>
      </AddToCartModal>
    </div>
  );
}

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
