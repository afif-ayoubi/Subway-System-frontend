import React from "react";
import { useEffect, useState } from "react";
import ManagerModal from "../Modal/ManagerModal";
import Modal from "../Modal/modal";

const Manager =()=>{
    const [manager, setManager] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [show,setShow] = useState(false)
    const pageSize = 7;
 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/get-all-managers',{
                    headers : {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjkxMzU1LCJleHAiOjE3MTI4OTYxNTUsIm5iZiI6MTcxMjI5MTM1NSwianRpIjoiWURSYnkxSlZ3ZVNxQzA4ViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.ZbImDPRvXZCUi-AQTQ89RXbOnjnpliMidwWsNrwfBH8`
                    }
                });
                const data = await response.json();
                setManager(data.managers);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    

    const totalPages = Math.ceil(manager.length / pageSize);

    const PageChange = (page) => {
        setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayManager = manager.slice(startIndex, endIndex);

    return (
        <div className="manager-container flex  column ">
            <div className="heading flex ">
                <h1>Manager</h1>
                <div>
                     <button onClick={()=>{setShow(true)}}>Add</button>
                </div>
                
            </div>{ show && < ManagerModal onclose = {() => setShow(false)}/>}
            {!show && (
<>
            <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manager Email</th>
                        <th>Status</th>
                        <th colSpan="4">Action</th>
                    </tr>
                </thead>
                    <tbody>
                    {displayManager.map(request => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.name}</td>
                            <td>{request.address}</td>
                            <td>{request.managerEmail}</td>
                            <td>{request.status}</td>
                            <td>{request.capacity}</td>
                            <td>
                                <button >Disable</button>
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
  </> )}
        </div>
    )
}

export default Manager