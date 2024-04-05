import React from "react";
import { useState,useEffect } from "react";
import Modal from "../../component/Modal/modal";
import ChatPopup from "../chats/Chat";
import './rides.css'
import RideModal from "../../component/Modal/RideMoald";
import EditRidePopup from "../../component/Modal/EditRideModal";

const Rides = ()=>{
    const [rides, setRides] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [show,setShow] = useState(false)
    const [showpop,setShowPop] = useState(false)
    const [editingRides, setEditingRides] = useState(null);
    const pageSize = 7;
 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/get-all-rides',{
                    headers : {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjYyNjE1LCJleHAiOjE3MTI4Njc0MTUsIm5iZiI6MTcxMjI2MjYxNSwianRpIjoiTFAzSGxlcWRHRkwwUlplViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.19yz9cZNYDcAKgkxGJauNrT_zh39TIOMEHeC-BDIiX0`
                    }
                });
                const data = await response.json();
                setRides(data.rides);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);
            const deleteData = async (id) =>{
                const data = new FormData();
                data.append('id', id);

            try {
                const response = await fetch(`http://127.0.0.1:8000/api/delete-ride/${id}`,{
                    method: 'DELETE',
                    headers : {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjYyNjE1LCJleHAiOjE3MTI4Njc0MTUsIm5iZiI6MTcxMjI2MjYxNSwianRpIjoiTFAzSGxlcWRHRkwwUlplViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.19yz9cZNYDcAKgkxGJauNrT_zh39TIOMEHeC-BDIiX0`
                    },
                    body: data
                })
                console.log(data)
                if (response.ok) {
                    setRides(prevRides => prevRides.filter(ride => ride.id !== id));
                } else {
                    console.error('Failed to delete ride:', response.statusText);
                }
            } catch (error) {
                console.error('Error deleting ride:', error);
            }
        }


    const totalPages = Math.ceil(rides.length / pageSize);

    const PageChange = (page) => {
        setCurrentPage(page);
    };

    const togglePopup = (ride) => {
        setEditingRides(ride)
        setShowPop(!showpop);
    };
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayRides = rides.slice(startIndex, endIndex);


    return (
        <div className="ride flex column ">
    <div className="heading flex">
        <h1>Rides</h1>
        <div>
            <button onClick={()=>{setShow(true)}}>Create</button>
        </div>
    </div>
   { show && <RideModal onclose = {() => setShow(false)}/>}

   {!show &&  !showpop &&(
                <>
    <div className="Ride-container">
        <table>
            <thead>
                <tr>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Departure Location</th>
                    <th> Arrival Location</th>
                    <th>Status</th>
                    <th colSpan="4">Action</th>

                </tr>
            </thead>
            <tbody>
                {displayRides.map(rides => (
                    <tr key={rides.id}>
                        <td>{rides.departure_time}</td>
                        <td>{rides.arrival_time}</td>
                        <td>{rides.departure_station.name}</td>
                        <td>{rides.arrival_station.name}</td>
                        <td>{rides.status}</td>
                        <td className="actions">
                            <button onClick={() => deleteData(rides.id)}>Remove</button>
                            <button className="edit" onClick={() => togglePopup(rides)}>Edit</button>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    <div className="pages flex">
        <button onClick={() => PageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} of {totalPages}</span>
        <button onClick={() => PageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div> 
        <ChatPopup />
    </>
            )}
           {showpop && <EditRidePopup onClose={togglePopup} ride={editingRides}/>}
</div>

    )
}

export default Rides