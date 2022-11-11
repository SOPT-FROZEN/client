import React from "react";

interface iMessage {
  name?: string;
  content: string;
}

function App() {
  const message: iMessage = {
    name: "은형",
    content: "❄️겨울왕국에 오신 것을 환영합니다❄️",
  };

  return (
    <div className="App">
      <h1>{message.content}</h1>
      <h2>-By {message.name}</h2>
    </div>
  );
}

export default App;
