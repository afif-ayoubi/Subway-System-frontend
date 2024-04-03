import React from "react";
import MainButton from "../MainButton";
import "./index.css";
const index = ({
  col_1 = "Station Name",
  col_2 = "Address",
  col_3 = "Operating Hours",
  col_4 = "Service Status",
}) => {
  return (
    <>
      <div class="table-card">
        <div class="el">{col_1}</div>
        <div class="el">{col_2}</div>
        <div class="el">{col_3}</div>
        <div class="el">{col_4}</div>
        <div className="view-btn">
          <MainButton text={"view"} width={"small-width"} />
        </div>
      </div>
    </>
  );
};
export default index;
