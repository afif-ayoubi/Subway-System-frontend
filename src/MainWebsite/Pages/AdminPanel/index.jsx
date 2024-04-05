import React from "react";
import SideBar from "./component/sidebar/sidebar";
import Dashboard from "./component/Dashborad/dashboard";
import Branches from "./component/Branches/Branch";
import Coins from "./component/coins/coins";
import Manager from "./component/Maanager/Manager";
// import { useNavigate, useNavigate } from "react-router-dom";
import "./style.css"
import "./component/charts/feature.css"
import "./component/charts/chart.css"
import "./component/Branches/branch.css"
import "./component/Maanager/Manager.css"
import { BrowserRouter,Routesm,Route } from "react-router-dom";

const AdminPanel = ()=>{
    // const nvigate = useNavigate()
    return (
        <div className="container flex ">
            <SideBar />
            {/* <Coins /> */}
            {/*<Dashboard />*/}
            {/* <Manager /> */}
            <Branches />
        </div>
    )
}

export default AdminPanel