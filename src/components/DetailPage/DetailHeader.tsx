import styled from "styled-components";
import theme from "../../styles/theme";
import { BurgerImage, BackIcon } from "../../assets/image/asset";
import Allergy from "../../components/common/Allergy";
import { useNavigate } from "react-router-dom";
import { iDetailInfo } from "../../pages/DetailPage";

export interface iDetailProps {
  detail: iDetailInfo;
}

export default function DetailHeader({ detail }: iDetailProps) {
  const navigate = useNavigate();
  return (
    <div>
      <DetailTitle>
        <DetailBackIcon src={BackIcon} onClick={() => navigate("/")}></DetailBackIcon>
        버거 & 세트
      </DetailTitle>
      <DetailDividingLine></DetailDividingLine>
      <DetailMenuImg src={BurgerImage} alt="트리플 치즈 버거 이미지"></DetailMenuImg>
      <DetailInfoBoard>
        <DetailMenuName>{detail.menuName}</DetailMenuName>
        <DetailAllergyInfo>
          <Allergy allergyData={detail.allergy} />
        </DetailAllergyInfo>
      </DetailInfoBoard>
    </div>
  );
}

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

  cursor: pointer;
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
