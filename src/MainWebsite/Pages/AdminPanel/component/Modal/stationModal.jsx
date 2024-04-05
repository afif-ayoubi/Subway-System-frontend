import React from "react";
import './stationModal.css'
import { useState } from "react";


const EditPopup = ({ onClose ,station }) => {
  const [editedStation, setEditedStation] = useState({ ...station });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStation(prevState => ({
        ...prevState,
        [name]: value
    }));
};

    const fetchData = async (e) =>{
      e.preventDefault();
      try {
          const response = await fetch(`http://127.0.0.1:8000/api/stations/${editedStation.id}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjYyNjE1LCJleHAiOjE3MTI4Njc0MTUsIm5iZiI6MTcxMjI2MjYxNSwianRpIjoiTFAzSGxlcWRHRkwwUlplViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.19yz9cZNYDcAKgkxGJauNrT_zh39TIOMEHeC-BDIiX0`

              },
              body: JSON.stringify(editedStation),
          });
          
          console.log(" updated :", editedStation);
          onClose();
      } catch (error) {
          console.error('Error updating :', error.message);
      }
  };

  return (
    <div className="modal flex column center">
      <div className="modal-content flex column">
        <span className="close" onClick={onClose}></span>
        <h2 className="flex center">Edit Station</h2>
        <form className="flex column center" onSubmit={fetchData}>
          <input type="text" name="name" placeholder="Name" value={editedStation.name} onChange={handleChange}/>
          <input type="text" name="address" placeholder="Address" value={editedStation.address} onChange={handleChange}/>
          <input type="text" name="operating_hours" placeholder="Facilities" value={editedStation.operating_hours} onChange={handleChange}/>
          <input type="text" name="facilities" placeholder="Status" value={editedStation.facilities} onChange={handleChange}/>
          <input type="text" name="service_status" placeholder="Operation Hours" value={editedStation.service_status} onChange={handleChange}/>
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

