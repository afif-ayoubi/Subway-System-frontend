import React from "react";
import { useState,useEffect } from "react";
import Modal from "../Modal/modal";
import ChatPopup from "../../ManagerPane;/chats/Chat";
import './branch.css'

const Branches = ()=>{
    const [stations, setStations] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [show,setShow] = useState(false)
    const pageSize = 7;
 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/get-all-stations',{
                    headers : {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjYyNjE1LCJleHAiOjE3MTI4Njc0MTUsIm5iZiI6MTcxMjI2MjYxNSwianRpIjoiTFAzSGxlcWRHRkwwUlplViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.19yz9cZNYDcAKgkxGJauNrT_zh39TIOMEHeC-BDIiX0`
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
    const deleteData = async (id) =>{
        const data = new FormData();
        data.append('id', id);

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/stations/${id}`,{
            method: 'DELETE',
            headers : {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjkxMzU1LCJleHAiOjE3MTI4OTYxNTUsIm5iZiI6MTcxMjI5MTM1NSwianRpIjoiWURSYnkxSlZ3ZVNxQzA4ViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.ZbImDPRvXZCUi-AQTQ89RXbOnjnpliMidwWsNrwfB`
            },
            body: data
        })
        console.log(data)
        if (response.ok) {
            setStations(prevStations => prevStations.filter(stations => stations.id !== id));
        } else {
            console.error('Failed to delete ride:', response.statusText);
        }
    } catch (error) {
        console.error('Error deleting ride:', error);
    }
}
    

    const totalPages = Math.ceil(stations.length / pageSize);

    const PageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayStations = stations.slice(startIndex, endIndex);


    return (
        <div className="branch flex column">
    <div className="heading flex">
        <h1>Stations</h1>
        <div>
            <button onClick={()=>{setShow(true)}}>Create</button>
        </div>
    </div>
   { show && <Modal onclose = {() => setShow(false)}/>}

   {!show && (
                <>
    <div className="branch-container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Operation</th>
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
                            <button >ShutDown</button>
                            <button onClick={() => deleteData(stations.id)}>Remove</button>
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
    </>
            )}
            <ChatPopup />
</div>

    )
}

export default Branches;
