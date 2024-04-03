import React, { useState, useEffect } from "react";
import "./style.css";

import ProfileImage from "../../../assets/profile.jpeg";
import MainButton from "../../Components/MainButton";
import MainInputs from "../../Components/MainInputs";
const Profile = () => {
  const [selectedButton, setSelectedButton] = useState("Profile");
  useEffect(() => {
    console.log(selectedButton);
  }, [selectedButton]);
  return (
    <div className="flex center">
      <div className="flex column container bg-navy">
        <div class="profile-image flex center">
          <img
            src={ProfileImage}
            alt="Profile Image"
            height="180px"
            width="180px"
          />
        </div>
        <div className="nav space-evenly flex center">
          <MainButton
            text={"Profile"}
            width={"small-width"}
            backgroundColor={
              selectedButton === "Profile" ? "bg-yellow" : "bg-light-blue"
            }
            clickHandler={() => setSelectedButton("Profile")}
          />
          <MainButton
            text={"History"}
            width={"small-width"}
            backgroundColor={
              selectedButton === "History" ? "bg-yellow" : "bg-light-blue"
            }
            clickHandler={() => setSelectedButton("History")}
          />
        </div>
        <div className="profile-section flex column center ">
          <MainInputs type="text" placeholder="Name" />
          <MainInputs type="Email" placeholder={"Email"} />
          <MainInputs type="Password" placeholder={"Password"} />

        
        </div>
        <div className="save-button flex center">
            <MainButton
              text={"Save"}
              width={"big-width"}
              backgroundColor={"bg-yellow"}
            />
          </div>
      </div>
    </div>
  );
};
export default Profile;
