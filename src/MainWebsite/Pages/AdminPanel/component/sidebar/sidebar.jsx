import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars , faBuilding,faCoins, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashborad/dashboard";
import { useState } from "react";
import "./sidebar.css"


const SideBar =()=>{
    const [show,setShow] = useState(false)
    const navigate = useNavigate()
    return(
        <div className="side-bar">
            <div className="img flex center">
                <h1>Admin</h1>
            </div>
            <div className="links flex column center ">
            <ul>
                <li className="items flex " onClick={() =>navigate('/dashboard')}>
                <h3>Dashboard</h3>
                    
                </li>
                <li className="items flex">
            
                    <h3>Stations</h3>
                </li>
                <li className="items flex">
                          <h3>Coins</h3>
                </li>
                <li className="items flex">
                     <h3>Manager</h3>
                </li>
            </ul>
            </div>
        </div>
    )
}
export default SideBar