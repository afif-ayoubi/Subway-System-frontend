import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
        <div className="rev flex column  center">
            <div className="heading-rev flex">
                <h2>Reviews</h2>
            </div>
            <div className=" cardss flex center ">
               
                    {displayRows.map(row =>( <div className="card-review flex column">
                         <div className="user-review flex">
                        <div>
                            <h2>{row.title}</h2>
                        </div>
                        <div>

                        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
                        </div>
                    </div>
                    
                    <div className="comment">
                        <p>{row.body}</p>
                    </div>
                    
                    <div className="btn flex ">
                        <div>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        </div>
                        
                        <button onClick={() => Delete(row.id)}>delete</button>
                    </div>
                </div>
                    ))}
                   
            </div>


            <div className="pages flex ">
                <button onClick={() => PageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={() => PageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default Review;
