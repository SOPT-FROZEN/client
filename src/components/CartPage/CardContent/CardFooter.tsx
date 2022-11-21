import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { iOrder } from "../../../pages/CartPage";
import theme from "../../../styles/theme";
import Counter from "../../common/Counter";

const CardContentFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 13px 5px;
  padding-bottom: 0px;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;

    width: 161px;
    height: 39px;

    border: 1px solid #545454;
    border-radius: 10px;

    ${theme.fonts.caption1};
    color: #545454;

    cursor: pointer;
  }
`;

interface iFooterProps {
  order: iOrder;
  setOrders: Dispatch<SetStateAction<iOrder[]>>;
  menuId: number;
  setId: number;
}

export default function CardFooter({ order, setOrders, menuId, setId }: iFooterProps) {
  const [count, setCount] = useState(order.details[setId].amount);

  useEffect(() => {
    // count 변경되면 orders 변경
    // order &&
    //   setOrders((prev) => {
    //     const copyPrev = [...prev];
    //     copyPrev[menuId].details[setId].amount = count;
    //     return copyPrev;
    //   });
    console.log(count);
  }, [count]);

  return (
    <CardContentFooter>
      <button>옵션 변경</button>
      <Counter count={order.details[setId].amount} setCount={setCount} />
    </CardContentFooter>
  );
}
