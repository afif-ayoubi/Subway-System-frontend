import React from "react";
import SideBar from "./component/sidebar/sidebar";
import Dashboard from "./component/Dashborad/dashboard";
import Branches from "./component/Branches/Branch";
import "./style.css"
import "./component/charts/feature.css"
import "./component/charts/chart.css"
import "./component/Branches/branch.css"
import { BrowserRouter,Routesm,Route } from "react-router-dom";

const AdminPanel = ()=>{

    return (
        <div className="container flex ">
            <SideBar />
            {/* <Dashboard /> */}
            <Branches />
        </div>
    )
}

export default AdminPanel