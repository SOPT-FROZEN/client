import React from "react";
import styled from "styled-components";
import { CartCloseIcon } from "../../../assets/image/asset";

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

export default function CardHeader() {
  return (
    <CardContentHeader>
      <button>
        <img src={CartCloseIcon} alt="닫기버튼 아이콘" />
      </button>
    </CardContentHeader>
  );
}
