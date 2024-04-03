import React from "react";
import "./style.css";
const MainInputs = ({type, clickHandler, placeholder}) => {
  return (
    <input
      type={type}   
      className="main-input"
      placeholder={placeholder}
      onChange={() => clickHandler?.call()}
    />
  );
};
export default MainInputs;
