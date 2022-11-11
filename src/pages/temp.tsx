// 여기에는 라우팅될 패이지들을 담아주세요!
import React from "react";

interface iMessage {
  name?: string;
  content: string;
}

export default function Temp() {
  const message: iMessage = {
    name: "은형",
    content: "❄️겨울왕국에 오신 것을 환영합니다❄️",
  };
  return (
    <div>
      <h1>{message.content}</h1>
      <h2>-By {message.name}</h2>
    </div>
  );
}
