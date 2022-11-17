import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import CardFooter from "./CardContent/CardFooter";
import CardHeader from "./CardContent/CardHeader";
import CardMenu from "./CardContent/CardMenu";

const Card = styled.article`
  display: flex;
  flex-direction: column;

  padding: 0px 10px;
  padding-top: 12px;
  margin-top: 10px;

  background-color: ${theme.colors.white};
  border-radius: 5px;
`;

const MenuHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 5px;
  width: 100%;

  > h1 {
    ${theme.fonts.subtitle2};
  }
  > h2 {
    color: ${theme.colors.green};
    ${theme.fonts.subtitle1};
  }
`;

const CardContent = styled.article`
  display: flex;
  flex-direction: column;

  padding-bottom: 15px;
  width: 100%;
  border-top: 1px solid ${theme.colors.gray200};
`;

export interface iSet {
  setId: number;
  set: string;
  price: number;
  amount: number;
}
export interface iOrder {
  menuId: number;
  title: string;
  total: number;
  details: iSet[];
}

export default function Cards() {
  const [orders, setOrders] = useState<iOrder[]>([
    {
      menuId: 1,
      title: "트리플 치즈 버거",
      total: 9900,
      details: [
        {
          setId: 1,
          set: "라지 세트",
          price: 9900,
          amount: 1,
        },
        {
          setId: 2,
          set: "단품",
          price: 4500,
          amount: 2,
        },
      ],
    },
  ]);

  return (
    <div>
      {orders.length ? (
        orders.map((order: iOrder, index: number) => (
          <Card key={index}>
            <MenuHeader>
              <h1>{order.title}</h1>
              <h2>₩ {order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
            </MenuHeader>
            {order.details.map((detail: iSet) => (
              <CardContent key={detail.setId}>
                <CardHeader setOrders={setOrders} menuId={order.menuId} setId={detail.setId} />
                <CardMenu set={detail.set} price={detail.price} />
                <CardFooter amount={detail.amount} />
              </CardContent>
            ))}
          </Card>
        ))
      ) : (
        <div>담는 데이터 없음</div>
      )}
    </div>
  );
}
