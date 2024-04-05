import React from "react";
import {useNavigate} from 'react-router-dom'
import MainButton from "../MainButton";
import "./index.css";
const index = ({
  col_1 = "Station Name",
  col_2 = "Address",
  col_3 = "Operating Hours",
  col_4 = "Service Status",
  height = "normal",
  stationId
}) => {
  const navigate = useNavigate()

  const handleViewClick = () => {
    navigate(`/schedule/${stationId}`)
  }
  return (
    <>
      <div className={`table-card ${height}`}>
        <div className="el">{col_1}</div>
        <div className="el">{col_2}</div>w
        <div className="el">{col_3}</div>
        <div className="el">{col_4}</div>
        <div className="view-btn">
          <MainButton text={"view"} width={"small-width"} onClick={handleViewClick} />
        </div>
      </div>
    </>
  );
};
export default index;
