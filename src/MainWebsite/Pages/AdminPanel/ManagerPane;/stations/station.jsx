import React from "react";
import { useState,useEffect } from "react";
import ChatPopup from "../chats/Chat";
import './station.css'
import EditPopup from "../../component/Modal/stationModal";

const Stations = ()=>{
    const [stations, setStations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showpop,setShowPop] = useState(false)
    
    const pageSize = 7;
 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/get-all-stations',{
                    headers : {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMTgxMTQ1LCJleHAiOjE3MTIxODQ3NDUsIm5iZiI6MTcxMjE4MTE0NSwianRpIjoiaWlGd0JhUmVBZktuYmQ3ZyIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.2tP7EHcu6Aq_4_tEgOyBhbdVadH0gkwX0fg8eMKwpKo`
                    }
                });
                const data = await response.json();
                setStations(data.stations);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    

    const totalPages = Math.ceil(stations.length / pageSize);

    const PageChange = (page) => {
        setCurrentPage(page);
    };


    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayStations = stations.slice(startIndex, endIndex);

    const togglePopup = () => {
        setShowPop(!showpop);
    };

    return (
        
        <div className="main-container flex column">
    <div className="heading flex">
        <h1>Stations</h1>
    </div>
{!showpop && (
            <>
    <div className="station-containe">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Operations</th>
                    <th>Facilities</th>
                    <th>Status</th>
                    <th colSpan="4">Action</th>
                </tr>
            </thead>
            <tbody>
                {displayStations.map(stations => (
                    <tr key={stations.id}>
                        <td>{stations.name}</td>
                        <td>{stations.address}</td>
                        <td>{stations.operating_hours}</td>
                        <td>{stations.facilities}</td>
                        <td>{stations.service_status}</td>
                        <td className="actions">
                            <button onClick={togglePopup}>Edit</button>
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
            {showpop && <EditPopup onClose={togglePopup} />}
</div>

    )
}

export default Stations;
