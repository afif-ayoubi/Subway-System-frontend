import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import Charts from "../charts/charts";
import Features from "../charts/feature";
import './dashboard.css'

const Dashboard = ()=>{
    
    return (
        <div className="main-dashborad">
            <div className="search flex ">
                <div className="child">
                <FontAwesomeIcon icon={faBars}  style={{color: "black",fontSize : "25px"}} />
                </div>
                <div className="child">
                    <input type="text" placeholder="Search" />
                </div>
                <div className=" ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrq8a6plyTZvi2bjCyHBnNKwahQzDOCze830QtQGD6jw&s" alt="" />
                </div>
                
            </div>
            <div className="cards flex">
                <div className="card flex column">
                    <div>
                        <h3>Total Rides</h3>
                    </div>
                    <div className="child-card flex">
                        <h3>3568</h3>
                    </div>
                </div>
                <div className="card flex column">
                    <div>
                        <h3>Total Rides</h3>
                    </div>
                    <div className="child-card flex">
                        <h3>3568</h3>
                    </div>
                </div>
                <div className="card flex column">
                    <div>
                        <h3>Total Rides</h3>
                    </div>
                    <div className="child-card flex">
                        <h3>3568</h3>
                    </div>
                </div>
                <div className="card flex column">
                    <div>
                        <h3>Total Rides</h3>
                    </div>
                    <div className="child-card flex">
                        <h3>3568</h3>
                    </div>
                </div>
                
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