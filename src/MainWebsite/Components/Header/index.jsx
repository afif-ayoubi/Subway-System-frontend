import React from "react";
import "./index.css";

const index = () => {
  return (
    <>
      <header class="user-header">
        <div class="logo">
          <img src="./assets/logo.svg" alt="" class="logo-img" />
          <h2>
            YourWay
          </h2>
        </div>
        <nav>
          <ul class="link-list">
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./pages/user/profile-settings.html">Profile</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default index;
