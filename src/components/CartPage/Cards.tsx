import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { iOrder, iSet } from "../../pages/CartPage";
import theme from "../../styles/theme";
import CardFooter from "./CardContent/CardFooter";
import CardHeader from "./CardContent/CardHeader";
import CardMenu from "./CardContent/CardMenu";
import { priceToString } from "../../util/priceToString";

export default function Cards(props: { orders: iOrder[]; setOrders: Dispatch<SetStateAction<iOrder[]>> }) {
  return (
    <div>
      {props.orders.map((order: iOrder, menuIdx: number) => (
        <Card key={menuIdx}>
          <MenuHeader>
            <MenuTitle>{order.title}</MenuTitle>
            <MenuPrice>₩ {priceToString(order.total)}</MenuPrice>
          </MenuHeader>
          {order.details?.map((detail: iSet, setIdx: number) => (
            <CardContent key={setIdx}>
              <CardHeader setOrders={props.setOrders} menuId={menuIdx} setId={setIdx} />
              <CardMenu set={detail.set} price={detail.price} />
              <CardFooter order={order} setOrders={props.setOrders} menuId={order.menuId} setId={setIdx} />
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

  padding: 0rem 1rem;
  padding-top: 1.2rem;
  margin-top: 1rem;

  background-color: ${theme.colors.white};
  border-radius: 0.5rem;
`;

const MenuHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 0.5rem;
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

  padding-bottom: 1.5rem;
  width: 100%;
  border-top: 0.1rem solid ${theme.colors.gray200};
`;
