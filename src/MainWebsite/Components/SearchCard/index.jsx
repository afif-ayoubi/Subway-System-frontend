import React, { useState } from "react";
import MainButton from "../MainButton";
import "./index.css";

const Index = () => {
  const [locationButtonValue, setLocationButtonValue] =
    useState("Get Location");

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();
            const cityName = data.locality;
            setLocationButtonValue(cityName);
          } catch (error) {
            console.error("Error fetching city name:", error.message);
          }
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
          <div className="station-input">
            <label htmlFor="stationName">Station Name:</label>
            <input
              id="stationName"
              type="text"
              placeholder="Enter station name"
            />
          </div>
          <div className="station-input">
            <label htmlFor="getLocationButton">Location:</label>
            <input
              id="getLocationButton"
              type="button"
              onClick={handleClick}
              value={locationButtonValue}
            />
          </div>
        </div>
        <div className="btn-search">
          <MainButton text={"search"} width={"small-width"} />
        </div>
      </div>
    </>
  );
};
export default Index;
