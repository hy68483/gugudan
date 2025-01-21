import { useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setResult("답을 입력해주세요");
      return;
    }
    const answer = first * second;
    if (parseInt(value) === answer) {
      setResult("정답!");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult("오답! 수학공부를 열심히 해봅시다!");
      setValue("");
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>랜덤 구구단 게임</h1>
      <span>
        {first} 곱하기 {second}는?
      </span>
      <br />
      <input value={value} onChange={onChange} />
      <button>제출</button>
      <p>{result}</p>
    </form>
  );
}

export default App;
