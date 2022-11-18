import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { CartCloseIcon } from "../../../assets/image/asset";
import { iOrder } from "../../../pages/CartPage";

const CardContentHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-top: 10.33px;
  margin-right: 5.37px;
  > button > img {
    width: 13.33px;
    height: 13.37px;
    cursor: pointer;
  }
`;

export default function CardHeader(detail: { setOrders: any; menuId: number; setId: number }) {
  const onClickCloseBtn = () => {
    detail.setOrders((prev: iOrder[]) => {
      let copyPrev = [...prev];

      copyPrev[detail.menuId - 1].details = prev[detail.menuId - 1].details?.filter(
        (item) => item.setId !== detail.setId,
      );

      if (!copyPrev[detail.menuId - 1].details?.length) {
        // 만약 들어있는 세트가 없으면 아예 삭제
        copyPrev = [...prev].filter((item) => item.menuId !== detail.menuId);
      }

      return copyPrev;
    });
  };
  return (
    <CardContentHeader>
      <button onClick={onClickCloseBtn}>
        <img src={CartCloseIcon} alt="닫기버튼 아이콘" />
      </button>
    </CardContentHeader>
  );
}