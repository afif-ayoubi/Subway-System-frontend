import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars , faBuilding,faCoins, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashborad/dashboard";
import { useState } from "react";


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
                <button className="items flex " onClick={() =>navigate('/dashboard')}>
                <h3>Dashboard</h3>
                    
                </button>
                <button className="items flex">
            
                    <h3>Stations</h3>
                </button>
                <button className="items flex">
                          <h3>Coins</h3>
                </button>
                <button className="items flex">
                     <h3>Manager</h3>
                </button>
            </ul>
            </div>
        </div>
    )
}
export default SideBar