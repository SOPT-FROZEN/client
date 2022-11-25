// 메뉴 상세보기 페이지
import { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { useNavigate, useParams } from "react-router-dom";
import { postCartAPI, getMenuDetail } from "../util/api";
import CountSet from "../components/DetailPage/CountSet";
import CartModal from "../components/DetailPage/CartModal";
import DetailOption from "../components/DetailPage/DetailOption";
import DetailHeader from "../components/DetailPage/DetailHeader";

export interface iDetailInfo {
  menuId: number;
  menuName: string;
  priceLarge: number;
  priceSet: number;
  priceOnly: number;
  allergy: Array<"pig" | "cow" | "tomato" | "chicken" | "lettuce">;
}

export default function DetailPage() {
  const { menuId } = useParams();
  const navigate = useNavigate();

  const [largeCount, setLargeCount] = useState(1);
  const [basicSetCount, setBasicSetCount] = useState(0);
  const [onlyCount, setOnlyCount] = useState(0);

  const [detailInfo, setDetailInfo] = useState<iDetailInfo>({
    menuId: 0,
    menuName: "",
    priceLarge: 0,
    priceSet: 0,
    priceOnly: 0,
    allergy: [],
  });

  const handleClick = () => {
    {
      menuId &&
        postCartAPI(menuId, largeCount, basicSetCount, onlyCount).then((result) => {
          if (result?.data.status === 200) {
            navigate("/", { state: { containCart: true } });
          }
        });
    }
  };

  useEffect(() => {
    {
      menuId && getMenuDetail(menuId).then((result) => setDetailInfo(result.data));
    }
  }, [menuId]);

  return (
    <DetailBackground>
      <DetailHeader detail={detailInfo}></DetailHeader>

      <AddSetTitle>세부 항목을 선택하세요</AddSetTitle>

      <CountSet
        setInfo={[largeCount, basicSetCount, onlyCount]}
        setSetInfo={[setLargeCount, setBasicSetCount, setOnlyCount]}
        detail={detailInfo}
        setDetail={setDetailInfo}></CountSet>

      <DetailOption></DetailOption>

      <CartModal handler={() => handleClick()}></CartModal>
    </DetailBackground>
  );
}

const DetailBackground = styled.section`
  width: 37.5rem;
  height: auto;
  background-color: ${theme.colors.gray100};
`;

const AddSetTitle = styled.h1`
  font-size: ${theme.fonts.title2};

  margin: 2rem 0rem 1.4rem 2.6rem;
`;
