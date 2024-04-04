import React from "react";
import ManagerSideBar from "./ManagerSideBar/ManagerSideBar";
import Rides from "./Rides/Rides";
import Review from "./Review/Review";
import ChatPopup from "./chats/Chat";
import Stations from "./stations/station";
import "../ManagerPane;/Review/Review.css"


const ManagerPanel = ()=>{

    return (
        <div className="flex">
            <ManagerSideBar />
            {/* <Rides /> */}
            {/* <Review /> */}
            <Stations />
            
        </div>
    )
}
export default ManagerPanel