import React from "react";

const SideBar =()=>{
    return(
        <div className="side-bar">
            <div className="img">
                <img src="./admin.jpg" alt="" />
            </div>
            <div className="links flex center ">
                <ul>
                    <li><h2>Dashboard</h2></li>
                    <li><h2>Branches</h2> </li>
                    <li><h2>Manager</h2> </li>
                    <li><h2>Coins</h2> </li>
                    <li><h2>Log Out</h2> </li> 
                </ul>
            </div>
        </div>
    )
}
export default SideBar