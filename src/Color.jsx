import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Color() {
  const color = useSelector((store) => store.colorReducer);
  const dispatch = useDispatch();

  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState({ red: 0, green: 0, blue: 0 });

  return (
    <>
      <div
        className="container"
        style={{
          padding: "20px",
          backgroundColor: `rgb(${color.backColor.red},${color.backColor.green},${color.backColor.blue})`,
        }}
      >
        <h1>Backgroud color change assignment in redux</h1>
        <div className="text-color">
          <input
            type="text"
            placeholder="Enter Color Name"
            onChange={(e) => setTextColor(e.target.value)}
          />
          <button
            style={{ padding: "20px 10px", margin: "10px" }}
            onClick={(e) => dispatch({ type: "text", payload: textColor })}
          >
            Change the text color
          </button>
        </div>
        <h1 style={{ color: color.textColor }}>React is easy</h1>
        <br />
        <div className="bg-color">
          RED:
          <input
            type="number"
            placeholder=" Enter number 0-255"
            onChange={(e) => setBgColor({ ...bgColor, red: e.target.value })}
          />
          <br />
          <br />
          GREEN:
          <input
            type="number"
            placeholder=" Enter number 0-255"
            onChange={(e) => setBgColor({ ...bgColor, green: e.target.value })}
          />
          <br />
          <br />
          Blue:
          <input
            type="number"
            placeholder=" Enter number 0-255"
            onChange={(e) => setBgColor({ ...bgColor, blue: e.target.value })}
          />
          <br />
          <br />
        </div>
        <br />
        <button
          style={{ padding: "20px" }}
          onClick={(e) => dispatch({ type: "bg", payload: bgColor })}
        >
          Change the background color
        </button>
      </div>
    </>
  );
}

export default Color;
