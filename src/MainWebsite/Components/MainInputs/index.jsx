import React from "react";
import "./style.css";
const MainInputs = ({type, clickHandler, placeholder,value=""}) => {
  return (
    <input
      type={type}   
      className="main-input"
      placeholder={placeholder}
      value={value}
      onChange={(event) => clickHandler?.call(null, event.target.value)}
    />
  );
};
export default MainInputs;
