import React, { useState } from "react";
import "./style.css";
import Money from "../../../assets/Frame.png";
import MainButton from "../../Components/MainButton";
const Booking = () => {
  const [selectedOption, setSelectedOption] = useState("Tickets");
  const [options, useOptions] = useState(["Tickets", "passes"]);
  const [selectedStation, setSelectedStation] = useState("Name of the station");
  const [balance, setBalance] = useState(0);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex center">
      <div className="booking-container flex column bg-navy ">
        <select
          className="select button-height bg-yellow big-width"
          value={selectedOption}
          onChange={(e) => handleSelectChange(e)}
        >
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            );
          })}
        </select>
        <div className="flex  space-between">
          <div className="selected-station "> {selectedStation}</div>
          <div className="flex">
            <img className="image" src={Money} alt="money" />

            <div className="selected-station">$ {balance}</div>
          </div>
        </div>
        <div className="flex row section">
          <div className="explanation">choose ticket</div>
          <div class="line bg-light-blue flex"></div>
          <div className="explanation">Billing</div>
          <div class="line bg-light-blue flex"></div>
          <div className="explanation">Payment</div>
          <div class="line2 bg-light-blue flex"></div>
        </div>
        <div className="flex  padding-60 space-between">
          <div className="flex column">
            <div className="explanation ">Name</div>
            <div className="name">Afif Ayoubi</div>
            <div class="line3 bg-light-blue flex"></div>
            <div className="explanation padding-20">Email</div>
            <div className="name">afif@gmail.com</div>
            <div class="line3 bg-light-blue flex "></div>
          </div>
          <div className="card1 flex column ">
            <div className="flex center">
              <div className="text-card center">{selectedOption}</div>
            </div>
            <div class="line-card  flex"></div>
            <div className="text-card">General Admission</div>
            <div className="flex space-between">
              <div className="text-card2">1 x</div>
              <div className="text-card2">$ 25.00</div>
            </div>
            <div class="line-card  flex"></div>
            <div className="flex space-between">
              <div className="text-card3">Total</div>
              <div className="text-card3">$ 25.00</div>
            </div>
            <div className="flex column center">
              {" "}
              <div className="text-card4">Payment method</div>
              <div className="text-card2">Visa</div>
            </div>
          </div>
        </div>
        <div className=" padding-100 save-button flex column center">
          <MainButton
            text={"Pay Now"}
            width={"big-width"}
            backgroundColor={"bg-yellow"}
          />
          <div className="padding-10">    <MainButton
            text={"Back"}
            width={"big-width"}
            backgroundColor={"white"}
          /></div>
              
        </div>
      </div>
    </div>
  );
};
export default Booking;
