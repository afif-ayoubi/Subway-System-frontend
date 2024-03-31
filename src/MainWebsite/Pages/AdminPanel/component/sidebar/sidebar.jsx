import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars , faBuilding,faCoins, faUser} from '@fortawesome/free-solid-svg-icons'

const SideBar =()=>{
    return(
        <div className="side-bar">
            <div className="img flex center">
                <h1>Admin</h1>
            </div>
            <div className="links flex column center ">
            <ul>
                <li className="items flex ">
                    <FontAwesomeIcon icon={faBars} className="icon1" style={{color: "#ffffff", fontSize : "25px"}} />
                    <h2>Dashboard</h2>
                </li>
                <li className="items flex">
                    <FontAwesomeIcon icon={faBuilding}  className="icon2" style={{color: "#ffffff", fontSize : "25px"}} />
                    <h2>Branches</h2>
                </li>
                <li className="items flex">
                    <FontAwesomeIcon icon={faCoins}  className="icon3" style={{color: "#ffffff", fontSize : "25px"}} />
                    <h2>Coins</h2>
                </li>
                <li className="items flex">
                    <FontAwesomeIcon icon={faUser}  className="icon4" style={{color: "#ffffff", fontSize : "25px"}} />
                    <h2>Manager</h2>
                </li>
            </ul>
            </div>
        </div>
    )
}
export default SideBar