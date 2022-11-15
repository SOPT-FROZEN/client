// 장바구니 페이지
import React from "react";
import styled from "styled-components";
import { CartCloseIcon, CartMenuImage, CartMinusIcon, CartPlusIcon } from "../assets/image/asset";
import theme from "../styles/theme";

const CartWrapper = styled.section`
  padding: 17.2px 20px;
  padding-bottom: 0px;

  min-height: 100vh;

  background-color: ${theme.colors.bg};
`;

const Title = styled.header`
  margin-bottom: 35px;

  font: ${theme.fonts.title1};
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;

  padding: 12px 10px;
  padding-bottom: 15px;

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
    font: ${theme.fonts.subtitle2};
  }
  > h2 {
    color: ${theme.colors.green};
    font: ${theme.fonts.subtitle1};
  }
`;

const CardContent = styled.article`
  display: flex;
  flex-direction: column;

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

      font: ${theme.fonts.caption1};
      > span {
        margin-left: 35px;
        font: ${theme.fonts.caption1};
        font-weight: 500;
        color: ${theme.colors.green};
      }
    }

    > ul {
      margin-top: 11px;
      margin-left: 30px;
      list-style: disc outside;
      font: ${theme.fonts.caption1};
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

    font: ${theme.fonts.caption1};
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
  }

  > div .minus {
    border-radius: 5px 0px 0px 5px;
  }

  > div .amount {
    width: 40px;
    border-left: 0px;
    border-right: 0px;

    color: ${theme.colors.black};
    font: ${theme.fonts.subtitle1};
  }

  > div .plus {
    border-radius: 0px 5px 5px 0px;
  }
`;

export default function CartPage() {
  return (
    <CartWrapper>
      <Title>장바구니</Title>
      <Card>
        <CardHeader>
          <h1>트리플 치즈 버거</h1>
          <h2>₩ 9,900</h2>
        </CardHeader>
        <CardContent>
          <CardContentHeader>
            <button>
              <img src={CartCloseIcon} alt="닫기버튼 아이콘" />
            </button>
          </CardContentHeader>
          <CardContentMenu>
            <img src={CartMenuImage} alt="메뉴이미지" />
            <div>
              <h3>
                라지 세트<span>₩ 9,900</span>
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
              <button className="amount">1</button>
              <button className="plus">
                <img src={CartPlusIcon} alt="더하기버튼 이미지" />
              </button>
            </div>
          </CardContentFooter>
        </CardContent>
      </Card>
    </CartWrapper>
  );
}
