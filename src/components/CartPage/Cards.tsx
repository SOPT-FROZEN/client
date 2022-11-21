import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { iOrder, iSet } from "../../pages/CartPage";
import theme from "../../styles/theme";
import CardFooter from "./CardContent/CardFooter";
import CardHeader from "./CardContent/CardHeader";
import CardMenu from "./CardContent/CardMenu";

export default function Cards(props: { orders: iOrder[]; setOrders: Dispatch<SetStateAction<iOrder[]>> }) {
  return (
    <div>
      {props.orders.map((order: iOrder, index: number) => (
        <Card key={index}>
          <MenuHeader>
            <MenuTitle>{order.title}</MenuTitle>
            <MenuPrice>₩ {order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</MenuPrice>
          </MenuHeader>
          {order.details?.map((detail: iSet, index: number) => (
            <CardContent key={index}>
              <CardHeader setOrders={props.setOrders} menuId={order.menuId} setId={detail.setId} />
              <CardMenu set={detail.set} price={detail.price} />
              <CardFooter amount={detail.amount} />
            </CardContent>
          ))}
        </Card>
      ))}
    </div>
  );
}

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
`;

const MenuTitle = styled.h1`
  ${theme.fonts.subtitle2};
`;

const MenuPrice = styled.h2`
  color: ${theme.colors.green};
  ${theme.fonts.subtitle1};
`;

const CardContent = styled.article`
  display: flex;
  flex-direction: column;

  padding-bottom: 15px;
  width: 100%;
  border-top: 1px solid ${theme.colors.gray200};
`;
