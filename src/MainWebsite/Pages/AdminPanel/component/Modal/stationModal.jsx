import React from "react";
import './stationModal.css'


const EditPopup = ({ onClose }) => {
  return (
    <div className="modal flex column center">
      <div className="modal-content flex column">
        <span className="close" onClick={onClose}></span>
        <h2 className="flex center">Edit Station</h2>
        <form className="flex column center">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="address" placeholder="Address" />
          <input type="text" name="Facilities" placeholder="Facilities" />
          <input type="text" name="status" placeholder="Status" />
          <input type="text" name="operation" placeholder="Operation Hours" />
          <div className="btns flex center">
            <button type="submit" className="add">Save</button>
            <button onClick={onClose} className="del">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPopup;

