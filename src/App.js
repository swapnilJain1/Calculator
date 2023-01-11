import "./styles.css";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult((oldValue) => oldValue.concat(event.target.value));
  };
  const calculate = () => {
    setResult(eval(result));
  };
  return (
    <div className="App">
      <input value={result} />
      <br />
      <button className="operators" onClick={clickHandler} value="+">
        +
      </button>
      <button className="operators" onClick={clickHandler} value="-">
        -
      </button>
      <button className="operators" onClick={clickHandler} value="/">
        /
      </button>
      <button className="operators" onClick={clickHandler} value="*">
        *
      </button>
      <br />
      <button onClick={clickHandler} value="1">
        1
      </button>
      <button onClick={clickHandler} value="2">
        2
      </button>
      <button onClick={clickHandler} value="3">
        3
      </button>
      <button onClick={clickHandler} value="4">
        4
      </button>
      <br />
      <button onClick={clickHandler} value="5">
        5
      </button>
      <button onClick={clickHandler} value="6">
        6
      </button>
      <button onClick={clickHandler} value="7">
        7
      </button>
      <button onClick={clickHandler} value="8">
        8
      </button>
      <br />
      <button onClick={clickHandler} value="9">
        9
      </button>

      <button onClick={clickHandler} value="0">
        0
      </button>
      <button className="green" onClick={calculate} value="=">
        =
      </button>

      <button className="red" onClick={() => setResult("")}>
        c
      </button>
    </div>
  );
}
