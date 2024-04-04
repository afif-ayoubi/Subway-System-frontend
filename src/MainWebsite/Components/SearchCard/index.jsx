import React from "react";
import MainButton from "../MainButton";
import "./index.css";

const index = () => {
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
          // You can do whatever you want with latitude and longitude here
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  return (
    <>
      <div className="search-card">
        <div className="input-group">
          <input />
          <input type="button" onClick={handleClick} value="Get Location" />
        </div>
        <div className="btn-search">
          <MainButton text={"search"} width={"small-width"} />
        </div>
      </div>
    </>
  );
};
export default index;
