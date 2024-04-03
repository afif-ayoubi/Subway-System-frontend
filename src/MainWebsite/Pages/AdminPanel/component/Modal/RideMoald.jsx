import React from "react";
import "./ManagerModal.css"


const RideModal = ({onclose})=>{
return (
    <div className="manager-cards flex center">
        <div className="managercard flex column">
        <h2 className="flex center">Create New Ride</h2>
            <form className="flex column center">
              <input type="text" name="Departure Time" placeholder="Departure Time"  />
              <input type="text" name="Arrival Time" placeholder="Arrival Time"  />
              <input type="text" name="Departure Location" placeholder="Departure Location"  />
              <input type="text" name="Arrival Location" placeholder="Arrival Location" />
              <div className="btns flex center">
                 <button type="submit" className="add">Create</button>
               <button onClick={onclose} className="del">Close</button>
              </div>
            </form>
        </div>
       
    </div>
)
    
}

export default RideModal