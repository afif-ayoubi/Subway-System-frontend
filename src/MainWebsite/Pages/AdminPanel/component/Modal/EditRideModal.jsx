import React, { useState } from "react";
import './stationModal.css';

const EditRidePopup = ({ onClose, ride }) => {
    const [editedRide, setEditedRide] = useState({ ...ride });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedRide(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/update-ride/${editedRide.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjYyNjE1LCJleHAiOjE3MTI4Njc0MTUsIm5iZiI6MTcxMjI2MjYxNSwianRpIjoiTFAzSGxlcWRHRkwwUlplViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.19yz9cZNYDcAKgkxGJauNrT_zh39TIOMEHeC-BDIiX0`
                },
                body: JSON.stringify(editedRide),
            });

            console.log("Ride updated successfully:", editedRide);
            onClose();
        } catch (error) {
            console.error('Error updating ride:', error.message);
        }
    };

    return (
        <div className="modal flex column center">
            <div className="modal-content flex column">
                <span className="close" onClick={onClose}></span>
                <h2 className="flex center">Edit Ride</h2>
                <form className="flex column center" onSubmit={handleSubmit}>
                    <input type="text" name="departure_time" placeholder="Departure Time" value={editedRide.departure_time} onChange={handleChange} />
                    <input type="text" name="arrival_time" placeholder="Arrival Time" value={editedRide.arrival_time} onChange={handleChange} />
                    <input type="text" name="departure_station" placeholder="Departure Location" value={editedRide.departure_station.name} onChange={handleChange} />
                    <input type="text" name="arrival_station" placeholder="Arrival Location" value={(editedRide.arrival_station.name)} onChange={handleChange} />
                    <input type="text" name="status" placeholder="Status" value={editedRide.status} onChange={handleChange} />
                    <div className="btns flex center">
                        <button type="submit" className="add">Save</button>
                        <button onClick={onClose} className="del">Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditRidePopup;
