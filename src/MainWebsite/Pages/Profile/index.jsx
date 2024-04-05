import React, { useState, useEffect } from "react";
import "./style.css";
import { sendRequest } from "../../../core/tools/request";
import { requestMethods } from "../../../core/enums/requestMethods";

import ProfileImage from "../../../assets/profile.jpeg";
import MainButton from "../../Components/MainButton";
import MainInputs from "../../Components/MainInputs";

const Profile = () => {
  const [selectedButton, setSelectedButton] = useState("Profile");
  const [showPopup, setShowPopup] = useState(false); 
  const [Credential, setCredential] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(requestMethods.GET, "/get-user/20");
        setCredential({
          ...Credential,
          name: response.data.user.name,
          email: response.data.user.email,
          password: response.data.user.password,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to toggle pop-up visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex center">
      <div className="flex column container bg-navy">
        <div className="profile-image flex center">
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
            clickHandler={() => {
              setSelectedButton("History");
              togglePopup(); // Show the pop-up when "History" button is clicked
            }}
          />
        </div>
        {selectedButton === "Profile" ? (
          <div>
            {" "}
            <div className="profile-section flex column center ">
              <MainInputs
                type="text"
                placeholder="Name"
                value={Credential.name}
                clickHandler={(e) => {
                  setCredential((prevCredential) => ({
                    ...prevCredential,
                    name: e,
                  }));
                }}
              />
              <MainInputs
                type="Email"
                placeholder={"Email"}
                value={Credential.email}
                clickHandler={(e) => {
                  setCredential((prevCredential) => ({
                    ...prevCredential,
                    email: e,
                  }));
                }}
              />
              <MainInputs
                type="Password"
                placeholder={"Password"}
                value={Credential.password}
              />
            </div>
            <div className="save-button flex center">
              <MainButton
                text={"Save"}
                width={"big-width"}
                backgroundColor={"bg-yellow"}
                clickHandler={async () => {
                  const response = await sendRequest(
                    requestMethods.POST,
                    "/update-user/20",
                    Credential
                  );
                  if (response.data.status === "success") {
                    setCredential((prevCredential) => ({
                      ...prevCredential,
                      name: response.data.user.name,
                      email: response.data.user.email,
                    }));
                  }
                }}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {showPopup && <div className="popup">This is the pop-up content</div>}
      </div>
    </div>
  );
};

export default Profile;
