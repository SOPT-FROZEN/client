import React, { useState } from "react";
import { CartCloseIcon, CartMenuImage, CartMinusIcon, CartPlusIcon } from "../../assets/image/asset";
import styled from "styled-components";
import theme from "../../styles/theme";

const Card = styled.article`
  display: flex;
  flex-direction: column;

  padding: 0px 10px;
  padding-top: 12px;

  background-color: ${theme.colors.white};
  border-radius: 5px;
`;

const CardHeader = styled.header`
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

const CardContentMenu = styled.article`
  display: flex;

  > img {
    margin-top: 1.3px;
    width: 104px;
    height: 95px;

    border: 1px solid ${theme.colors.gray200};
    border-radius: 5px;
  }

  > div {
    width: 100%;

    > h3 {
      margin-top: 11px;
      margin-left: 14px;

      ${theme.fonts.caption1};
      > span {
        margin-left: 35px;
        ${theme.fonts.caption1};
        font-weight: 500;
        color: ${theme.colors.green};
      }
    }

    > ul {
      margin-top: 11px;
      margin-left: 30px;
      list-style: disc outside;
      ${theme.fonts.caption1};
      font-weight: 500;
      color: #0a0909;
      > li:last-child {
        margin-top: 3px;
      }
    }
  }
`;

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

  > div {
    display: flex;
    align-items: center;
  }

  > div button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 38px;
    height: 38px;

    border: 1px solid ${theme.colors.gray600};
    cursor: pointer;

    > img {
      width: 16px;
      height: 16px;
    }
  }

  > div .minus {
    border-radius: 5px 0px 0px 5px;
    > img {
      height: 2px;
    }
  }

  > div .amount {
    width: 40px;
    border-left: 0px;
    border-right: 0px;

    color: ${theme.colors.black};
    ${theme.fonts.subtitle1};

    cursor: auto;
  }

  > div .plus {
    border-radius: 0px 5px 5px 0px;
  }
`;

// Need interface

export default function Cards() {
  const [orders, setOrders] = useState([
    {
      title: "트리플 치즈 버거",
      total: 9900,
      details: [
        {
          set: "라지 세트",
          price: 9900,
          amount: 1,
        },
        {
          set: "단품",
          price: 4500,
          amount: 2,
        },
      ],
    },
  ]);
  return (
    <div>
      {orders.map((order, index) => (
        <Card key={index}>
          <CardHeader>
            <h1>{order.title}</h1>
            <h2>₩ {order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
          </CardHeader>
          {order.details.map((detail, index) => (
            <CardContent key={index}>
              <CardContentHeader>
                <button>
                  <img src={CartCloseIcon} alt="닫기버튼 아이콘" />
                </button>
              </CardContentHeader>
              <CardContentMenu>
                <img src={CartMenuImage} alt="메뉴이미지" />
                <div>
                  <h3>
                    {detail.set}
                    <span>₩ {detail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                  </h3>
                  <ul>
                    <li>사이드 - 후렌치 후라이</li>
                    <li>음료 - 코카콜라</li>
                  </ul>
                </div>
              </CardContentMenu>
              <CardContentFooter>
                <button>옵션 변경</button>
                <div>
                  <button className="minus">
                    <img src={CartMinusIcon} alt="빼기버튼 이미지" />
                  </button>
                  <button className="amount">{detail.amount}</button>
                  <button className="plus">
                    <img src={CartPlusIcon} alt="더하기버튼 이미지" />
                  </button>
                </div>
              </CardContentFooter>
            </CardContent>
          ))}
        </Card>
      ))}
    </div>
  );
}
