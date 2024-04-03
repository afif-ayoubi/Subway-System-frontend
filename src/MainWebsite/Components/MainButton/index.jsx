import React from "react";
import "./style.css";

const MainButton = ({ text, clickHandler, backgroundColor = "bg-yellow",width }) => {
  return (
    <button
      onClick={() => clickHandler?.call()}
      className={`main-button ${backgroundColor} ${width} button-height`}
    >
      {text}
    </button>
  );
};
export default MainButton;
