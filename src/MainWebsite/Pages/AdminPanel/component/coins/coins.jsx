import React from "react";
import { useState,useEffect } from "react";
import "./coins.css"

const Coins = ()=>{
    const [coinRequests, setCoinRequests] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 7;
 



        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/get-all-coin-requests',{
                    headers : {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjYyNjE1LCJleHAiOjE3MTI4Njc0MTUsIm5iZiI6MTcxMjI2MjYxNSwianRpIjoiTFAzSGxlcWRHRkwwUlplViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.19yz9cZNYDcAKgkxGJauNrT_zh39TIOMEHeC-BDIiX0`

                    }
                });
                const data = await response.json();
                setCoinRequests(data.coin_requests);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    
    const updateStatus = async (requestId, status) => {
        try {
          await fetch(`http://127.0.0.1:8000/api/update-coin-request/${requestId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjYyNjE1LCJleHAiOjE3MTI4Njc0MTUsIm5iZiI6MTcxMjI2MjYxNSwianRpIjoiTFAzSGxlcWRHRkwwUlplViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.19yz9cZNYDcAKgkxGJauNrT_zh39TIOMEHeC-BDIiX0",
            },
            body: JSON.stringify({ status }),
          });

          fetchData();
        } catch (error) {
          console.error("Error updating request status:", error);
        }
      };
    
      const handleAccept = (requestId) => {
        updateStatus(requestId, "Approved");
      };
    
      const handleReject = (requestId) => {
        updateStatus(requestId, "Rejected");
      };

    const totalPages = Math.ceil(coinRequests.length / pageSize);

    const PageChange = (page) => {
        setCurrentPage(page);
    };


    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayCoinRequests = coinRequests.slice(startIndex, endIndex);


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
                {displayCoinRequests.map(request => (
                    <tr key={request.id}>
                        <td>{request.user.name}</td>
                        <td>{request.user.email}</td>
                        <td>{request.amount}</td>
                        <td>{request.status}</td>
                        <td className="actions">
                            <button onClick={() => handleAccept(request.id)}className="accept">Accept</button>
                            <button onClick={() => handleReject(request.id)}>Reject</button>
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