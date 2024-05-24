import React, { useState } from "react";

function Content() {
  const [display, changeDisplay] = useState("");

  const onHandleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(display);
        changeDisplay(result);
      } catch (error) {
        changeDisplay("Error");
      }
    } else if (value === "C") {
      changeDisplay("");
    } else if (value === "←") {
      changeDisplay(display.slice(0, -1));
    } else {
      changeDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <>
      <div className="second-box">
        <div className="display"> {display} </div>
        <div className="keypad">
          <button onClick={() => onHandleClick(1)}>1</button>
          <button onClick={() => onHandleClick(2)}>2</button>
          <button onClick={() => onHandleClick(3)}>3</button>
          <button onClick={() => onHandleClick("+")}>+</button>
          <button onClick={() => onHandleClick(4)}>4</button>
          <button onClick={() => onHandleClick(5)}>5</button>
          <button onClick={() => onHandleClick(6)}>6</button>
          <button onClick={() => onHandleClick("-")}>-</button>
          <button onClick={() => onHandleClick(7)}>7</button>
          <button onClick={() => onHandleClick(8)}>8</button>
          <button onClick={() => onHandleClick(9)}>9</button>
          <button onClick={() => onHandleClick("*")}>*</button>
          <button onClick={() => onHandleClick(0)}>0</button>
          <button onClick={() => onHandleClick("/")}>/</button>
          <button onClick={() => onHandleClick("C")}>C</button>
          <button onClick={() => onHandleClick("←")}>←</button>
          <button className="equals" onClick={() => onHandleClick("=")}>=</button>
        </div>
      </div>
      <h5>Made by Mohith G K</h5>
    </>
  );
}

export default Content;

