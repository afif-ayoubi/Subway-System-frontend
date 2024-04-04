import React from "react";
import "./ManagerModal.css"


const ManagerModal = ({onclose})=>{
return (
    <div className="manager-cards flex center">
        <div className="managercard flex column">
        <h2 className="flex center">Create New Manager</h2>
            <form className="flex column center">
              <input type="text" name="name" placeholder="Name"  />
              <input type="text" name="usename" placeholder="Username"  />
              <input type="text" name="managerEmail" placeholder="Manager Email"  />
              <input type="text" name="status" placeholder="Status" />
              <div className="btns flex center">
                 <button type="submit" className="add">Create</button>
               <button onClick={onclose} className="del">Close</button>
              </div>
              
            </form>
        </div>
       
    </div>
)
    
}

export default ManagerModal