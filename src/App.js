import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);

  const reset =()=>{
    setValue([
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"]
    ]);
  };

  let [xo, setXo] = useState(0);

  const buttonClick = (i, j) => {
    setXo(++xo);
    if (value[i][j] === "-" || value[i][j] === "0") {
      value[i][j] = "X";
    } else {
      value[i][j] = "0";
    }
  };
  useEffect(() => {
    func();
  }, [xo]);

  const func = () => {
    var buttonValue = [];

    for (let i = 0; i < 3; i++) {
      var anything = [];

      for (let j = 0; j < 3; j++) {
        anything.push(
          <button onClick={() => buttonClick(i, j)}>{value[i][j]}</button>
        );
      }
      anything.push(<br />);
      buttonValue.push(anything);
    }
    return buttonValue;
  };

  const x = () => {
    setValue("X");
  };
  const o = () => {
    setValue("0");
  };
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      {func()}
      <br/>
      <br/>
      <br/>
      <div>
        <button onClick={reset}>Click to Reset</button>
      </div>
    </div>
  );
}
