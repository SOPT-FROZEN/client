// api 모듈을 선언하는 파일입니다
import axios from "axios";

// 예시
interface iCart {
  status: number;
  message: string;
  data: [];
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const getCartAPI = async () => {
  try {
    const res = await axios.get("/cart");
    console.log(getCartAPI);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
