import React, { useState } from "react";
import "./modal.css"

const  Modal = ({onclose})=> {
  return (
    <div className="modal flex column center ">
      <div className="modal-content flex column ">
        <span className="close"></span>
          <h2 className="flex center">Create New Station</h2>
            <form className="flex column center">
              <input type="text" name="name" placeholder="Name"  />
              <input type="text" name="address" placeholder="Address"  />
              <select name=" Select Manager" id="" className="select">
                <option value="">Manaher1</option>
                <option value="">Manaher1</option>
                <option value="">Manaher1</option>
                <option value="">Manaher1</option>
              </select>
              <input type="text" name="managerEmail" placeholder="Manager Email"  />
              <input type="text" name="status" placeholder="Status" />
              <input type="text" name="operation" placeholder="Operation Hours"  />
              <div className="btns flex center">
                 <button type="submit" className="add">Create</button>
               <button onClick={onclose} className="del">Close</button>
              </div>
              
            </form>
      </div>
     </div>
  )
}
export default Modal