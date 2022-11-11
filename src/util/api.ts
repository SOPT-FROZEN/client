// api 모듈을 선언하는 파일입니다
import axios from "axios";

// 예시
interface iLogin {
  id: string;
  password: string;
}

export const loginAPI = async (data: iLogin) => {
  try {
    const res = await axios.post("/login", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
