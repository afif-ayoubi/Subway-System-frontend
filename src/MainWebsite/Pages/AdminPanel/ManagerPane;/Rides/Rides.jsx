import React from "react";
import { useState,useEffect } from "react";
import Modal from "../../component/Modal/modal";
import ChatPopup from "../chats/Chat";
import './rides.css'
import RideModal from "../../component/Modal/RideMoald";

const Rides = ()=>{
    const [rides, setRides] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [show,setShow] = useState(false)
    const pageSize = 7;
 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/get-all-rides',{
                    headers : {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMTg5NTgwLCJleHAiOjE3MTIxOTMxODAsIm5iZiI6MTcxMjE4OTU4MCwianRpIjoiRjhqRU8zY0xYZXhqTndPRCIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.PV_x3YuD-0mCPfSvx4xtysLfVeeGn-c3KCAonRPnHOg`
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
    


    const totalPages = Math.ceil(rides.length / pageSize);

    const PageChange = (page) => {
        setCurrentPage(page);
    };
    const Delete = (id) => {
        setRides(prevRides => prevRides.filter(rides => rides.id !== id));
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

   {!show && (
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
                        <td>{rides.departure_station_id}</td>
                        <td>{rides.arrival_station_id}</td>
                        <td>{rides.status}</td>
                        <td className="actions">
                            <button onClick={() => Delete(rides.id)}>Remove</button>
                            <button onClick={() => Delete(rides.id)}>Edite</button>
                            
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
           
</div>

    )
}

export default Rides