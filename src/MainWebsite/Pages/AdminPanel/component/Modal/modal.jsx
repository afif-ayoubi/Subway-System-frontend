import React, { useState } from "react";
import "./modal.css"

const  Modal = ({create})=> {
  return (
    <div className="modal flex column ">
      <div className="modal-content">
        <span className="close"></span>
          <h2>Create New Branch</h2>
            <form>
              <input type="text" name="id" placeholder="ID" />
              <input type="text" name="name" placeholder="Name"  />
              <input type="text" name="address" placeholder="Address"  />
              <input type="text" name="managerEmail" placeholder="Manager Email"  />
              <input type="text" name="status" placeholder="Status" />
              <input type="text" name="capacity" placeholder="Capacity"  />
               <button type="submit">Create</button>
            </form>
      </div>
     </div>
  )
}
export default Modal