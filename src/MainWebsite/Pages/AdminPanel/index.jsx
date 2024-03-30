import React from "react";
import SideBar from "./component/sidebar/sidebar";
import Dashboard from "./component/Dashborad/dashboard";
import "./style.css"

const AdminPanel = ()=>{

    return (
        <div className="container flex ">
            
            <SideBar />
            <Dashboard />
        </div>
    )
}

export default AdminPanel