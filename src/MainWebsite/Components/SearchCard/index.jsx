import React from "react";
import MainButton from "../MainButton";
import "./index.css";

const index = () => {
  return (
    <>
      <div className="search-card">
        <div className="input-group">
          <input />
          <input />
          <input />
        </div>
        <div className="btn-search">
          <MainButton text={"search"} width={"small-width"} />
        </div>
      </div>
    </>
  );
};
export default index;
