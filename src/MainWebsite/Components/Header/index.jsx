import React from "react";
import "./index.css";

const index = ({nav1="Home", nav2="Profile", nav3="Map"}) => {
  return (
    <>
      <header class="user-header ">
        <div class="logo">
          <h2>
            YourWay
          </h2>
        </div>
        <nav>
          <ul class="link-list">
            <li>
              <a href="./index.html">{nav1}</a>
            </li>
            <li>
              <a href="./pages/user/profile-settings.html">{nav2}</a>
            </li>
            <li>
              <a href="./pages/user/profile-settings.html">{nav3}</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default index;
