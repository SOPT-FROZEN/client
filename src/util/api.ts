// api 모듈을 선언하는 파일입니다
import axios from "axios";

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
