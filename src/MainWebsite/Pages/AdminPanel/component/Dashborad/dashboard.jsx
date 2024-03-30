import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import Charts from "../charts/charts";
import Features from "../charts/feature";

const Dashboard = ()=>{
    
    return (
        <div className="main-dashborad">
            <div className="search flex ">
                {/* <div className="child">
                <FontAwesomeIcon icon={faBars}  style={{color: "#ffffff",fontSize : "25px"}} />
                </div> */}
                <div className="child">
                    <input type="text" />
                </div>
                <div className="child">
                    <img src="" alt="" />
                </div>
                
            </div>
            <div className="cards flex">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="charts flex">
                <div className="features">
                    <Features />
                </div>
                <div className="chart">
                    <Charts />
                </div>
            </div>
        </div>
    )
}
export default Dashboard