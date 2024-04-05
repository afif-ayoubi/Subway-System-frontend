import React from "react";
import "./index.css";

const index = ({
  nav1 = "Home",
  nav2 = "Profile",
  nav3 = "Map",
  clickHandler1,
  clickHandler2,
  clickHandler3,
}) => {
  return (
    <>
      <header class="user-header ">
        <div class="logo">
          <h2>YourWay</h2>
        </div>
        <nav>
          <ul class="link-list">
            <li>
              <a  onClick={() => clickHandler1?.call()}>
                {nav1}{" "}
              </a>
            </li>
            <li>
              <a
                
                onClick={() => clickHandler2?.call()}
              >
                {nav2}
              </a>
            </li>
            <li>
              <a
                
                onClick={() => clickHandler3?.call()}
              >
                {nav3}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default index;
