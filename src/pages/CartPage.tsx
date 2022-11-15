// 장바구니 페이지
import React from "react";
import styled from "styled-components";
import { CartCloseIcon, CartMenuImage, CartMinusIcon, CartPlusIcon } from "../assets/image/asset";
import theme from "../styles/theme";

const CartWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 17.2px 20px;
  padding-bottom: 0px;

  min-height: 100vh;

  background-color: ${theme.colors.bg};
`;

const Title = styled.header`
  margin-bottom: 35px;

  ${theme.fonts.title1};
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

const AddBtn = styled.button`
  margin: 10px;
  padding: 10px;
  margin-bottom: 42px;

  background-color: ${theme.colors.gray300};
  border: 1px solid #a5a5a5;
  border-radius: 10px;

  ${theme.fonts.caption1};
  color: ${theme.colors.gray700};
  cursor: pointer;
`;

const AddressTimeContainer = styled.article`
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  margin-bottom: 15px;

  background-color: ${theme.colors.white};
  border-radius: 5px;
  > h1 {
    margin-left: 10px;
    ${theme.fonts.title2};
  }

  > h2 {
    margin-left: 15px;
    margin-top: 3px;
    ${theme.fonts.body2};
    font-weight: 400;
    color: #6d6d6d;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
    margin: 0px 12px;
    margin-top: 13px;

    border: 1px solid #545454;
    border-radius: 10px;

    cursor: pointer;
  }
`;

const OkBtn = styled.button`
  height: 50px;

  padding: 10px;
  margin-top: 15px;
  margin-bottom: 24px;

  background: #d14938;
  border-radius: 10px;
  filter: drop-shadow(0px 3px 13px rgba(0, 0, 0, 0.25));

  color: ${theme.colors.white};
  ${theme.fonts.title2};

  cursor: pointer;
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
      <AddBtn>항목 추가</AddBtn>
      <AddressTimeContainer>
        <h1>이 주소로 배달됩니다.</h1>
        <h2>서울특별시 동대문구 회기동 123-45 101호</h2>
        <button>변경</button>
      </AddressTimeContainer>
      <AddressTimeContainer>
        <h1>예상 배달 시간</h1>
        <h2>2022/01/11 07:54</h2>
        <button>변경</button>
      </AddressTimeContainer>
      <OkBtn>주문확인</OkBtn>
    </CartWrapper>
  );
}
