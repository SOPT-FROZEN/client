import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { iOrder, iSet } from "../../pages/CartPage";
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

export default function Cards(props: { orders: iOrder[]; setOrders: Dispatch<SetStateAction<iOrder[]>> }) {
  return (
    <div>
      {props.orders.map((order: iOrder, menuIdx: number) => (
        <Card key={menuIdx}>
          <MenuHeader>
            <h1>{order.title}</h1>
            <h2>₩ {order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          </MenuHeader>
          {order.details?.map((detail: iSet, setIdx: number) => (
            <CardContent key={setIdx}>
              <CardHeader setOrders={props.setOrders} menuId={menuIdx} setId={setIdx} />
              <CardMenu set={detail.set} price={detail.price} />
              <CardFooter amount={detail.amount} />
            </CardContent>
          ))}
        </Card>
      ))}
    </div>
  );
}
