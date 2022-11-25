// api 모듈을 선언하는 파일입니다
import axios from "axios";

export interface iSetInfo {
  menuId: number;
  largeSet: number;
  basicSet: number;
  only: number;
}

// 장바구니 조회 GET API
export const getCartAPI = async () => {
  try {
    const res = await axios.get("/cart");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 메인페이지 메뉴 필터링 GET API
export const getCategorydMenu = async (categoryName: string) => {
  try {
    const res = await axios.get(`/category/${categoryName}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//메뉴 상세 페이지 조회 GET API
export const getMenuDetail = async (menuId: string) => {
  try {
    const res = await axios.get(`/menu/${menuId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 담기 POST API

export const postCartAPI = async (menuId: string, largeSet: number, basicSet: number, only: number) => {
  try {
    const res = await axios.post(`/cart/${menuId}`, {
      largeSet: largeSet,
      set: basicSet,
      only: only,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// export const postCartAPI = async ({ menuId, largeSet, basicSet, only }: iSetInfo) => {
//   try {
//     const res = await axios.post(`/cart/${menuId}`, {
//       largeSet: largeSet,
//       set: basicSet,
//       only: only,
//     });
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };
