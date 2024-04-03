import React from "react";
import { useState,useEffect } from "react";
import Modal from "../../component/Modal/modal";
import ChatPopup from "../chats/Chat";
import './rides.css'
import RideModal from "../../component/Modal/RideMoald";

const Rides = ()=>{
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [show,setShow] = useState(false)
    const pageSize = 7;
 


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
                const data = await response.json();
                setRows(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    


    const totalPages = Math.ceil(rows.length / pageSize);

    const PageChange = (page) => {
        setCurrentPage(page);
    };
    const Delete = (id) => {
        setRows(prevRows => prevRows.filter(row => row.id !== id));
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayRows = rows.slice(startIndex, endIndex);


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
                {displayRows.map(row => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.address}</td>
                        <td>{row.managerEmail}</td>
                        <td>{row.status}</td>
                        <td>{row.capacity}</td>
                        <td className="actions">
                            <button onClick={() => Delete(row.id)}>Remove</button>
                            <button onClick={() => Delete(row.id)}>Edite</button>
                            
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