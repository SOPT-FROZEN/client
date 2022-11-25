import { useEffect, SetStateAction, Dispatch } from "react";
import theme from "../../styles/theme";
import styled from "styled-components";
import { priceToString } from "../../util/priceToString";
import Counter from "../../components/common/Counter";
import { useParams } from "react-router-dom";
import { getMenuDetail } from "../../util/api";
import { iDetailInfo } from "../../pages/DetailPage";

export interface iSetProps {
  setInfo: Array<number>;
  setSetInfo: Dispatch<SetStateAction<number>>[];
  detail: iDetailInfo;
  setDetail: Dispatch<SetStateAction<iDetailInfo>>;
}

export default function CountSet({ setInfo, setSetInfo, detail, setDetail }: iSetProps) {
  const { menuId } = useParams();

  useEffect(() => {
    {
      menuId && getMenuDetail(menuId).then((result) => setDetail(result.data));
    }
  }, [menuId]);

  return (
    <div>
      {["라지세트", "세트", "단품"].map((set) => (
        <AddSetBoard key={set}>
          <AddSetBoardTitleWrap>
            <AddSetBoardTitle>{set}</AddSetBoardTitle>
          </AddSetBoardTitleWrap>
          <AddSetBoardPrice>
            ₩{" "}
            {priceToString(
              set === "라지세트" ? detail.priceLarge : set === "세트" ? detail.priceSet : detail.priceOnly,
            )}
          </AddSetBoardPrice>
          {set === "라지세트" ? (
            <Counter count={setInfo[0]} setCount={setSetInfo[0]}></Counter>
          ) : set === "세트" ? (
            <Counter count={setInfo[1]} setCount={setSetInfo[1]}></Counter>
          ) : (
            <Counter count={setInfo[2]} setCount={setSetInfo[2]}></Counter>
          )}
        </AddSetBoard>
      ))}
    </div>
  );
}
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

  margin: 2rem 4.3rem 2rem 1.1rem;

  display: flex;
  align-items: center;
`;
