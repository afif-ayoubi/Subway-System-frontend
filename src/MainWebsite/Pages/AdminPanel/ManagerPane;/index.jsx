import React from "react";
import ManagerSideBar from "./ManagerSideBar/ManagerSideBar";
import Rides from "./Rides/Rides";

const ManagerPanel = ()=>{

    return (
        <div className="flex">
            <ManagerSideBar />
            <Rides />

        </div>
    )
}
export default ManagerPanel