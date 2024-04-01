import React from "react";
import { useEffect, useState } from "react";
import ManagerModal from "../Modal/ManagerModal";
import Modal from "../Modal/modal";

const Manager =()=>{
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [show,setShow] = useState(false)
    const pageSize = 9;
 


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
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayRows = rows.slice(startIndex, endIndex);

    return (
        <div className="manager-container flex  column ">
            <div className="heading flex center">
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
                        {/* <th>Address</th> */}
                        <th>Manager Email</th>
                        <th>Status</th>
                        {/* <th></th>
                        <th></th> */}
                        <th colSpan="4">Action</th>
                        {/* <th></th>
                        <th></th> */}
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
                            <td>
                                <button >disable</button>
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