import React from "react";
import { useState,useEffect } from "react";
import "./coins.css"

const Coins = ()=>{
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


    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayRows = rows.slice(startIndex, endIndex);


    return (
        <div className="coin flex column">
    <div className="">
        <h1>Coins</h1>
        <div>

        </div>
    </div>


    
    <div className="Coins-container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th colSpan="4">Action</th>
                </tr>
            </thead>
            <tbody>
                {displayRows.map(row => (
                    <tr key={row.id}>
                        {/* <td>{row.id}</td> */}
                        <td>{row.name}</td>
                        <td>{row.address}</td>
                        <td>{row.managerEmail}</td>
                        <td>{row.status}</td>
                        <td>{row.capacity}</td>
                        <td className="actions">
                            <button className="accept">Accept</button>
                            <button >Reject</button>
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

</div>

    )
}
export default  Coins