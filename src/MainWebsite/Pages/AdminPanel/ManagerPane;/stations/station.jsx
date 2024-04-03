import React from "react";
import { useState,useEffect } from "react";
import ChatPopup from "../chats/Chat";
import './station.css'

const Stations = ()=>{
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
        <div className="main-container flex column">
    <div className="heading flex">
        <h1>Stations</h1>
    </div>

    <div className="r">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Operations</th>
                    <th>Status</th>
                    <th>Facilities</th>
                    <th colSpan="4">Action</th>
                </tr>
            </thead>
            <tbody>
                {displayRows.map(row => (
                    <tr key={row.id}>
                        <td>{row.name}</td>
                        <td>{row.address}</td>
                        <td>{row.managerEmail}</td>
                        <td>{row.status}</td>
                        <td>{row.status}</td>
                        <td className="actions">
                            <button onClick={() => Delete(row.id)}>Edit</button>
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
</div>

    )
}

export default Stations;
