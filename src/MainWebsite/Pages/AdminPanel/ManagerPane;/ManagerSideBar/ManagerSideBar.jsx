import React from "react";

const ManagerSideBar = ()=>{

    return(
        <div className="side-bar">
            <div className="img flex center">
                <h1>Admin</h1>
            </div>
            <div className="links flex column center ">
            <ul>
                <li className="items flex " >
                <h3>Rides</h3>
                    
                </li>
                <li className="items flex">
            
                    <h3>Review</h3>
                </li>
                <li className="items flex">
                          <h3>Chat</h3>
                </li>

            </ul>
            </div>
        </div>
    )
}

export default ManagerSideBar