import React, { useState, useEffect } from "react";

const Review = () => {
    const [rows, setRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

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
        <div className="rev flex column  ">
            <div className="heading-rev">
                <h2>Reviews</h2>
            </div>
            <div className=" cardss flex ">
                {displayRows.map(row => (
                    <div className="review-card" key={row.id}>
                        <h3>{row.title}</h3>
                        <p>{row.body}</p>
                        <div className="dele">
                            <button  onClick={() => Delete(row.id)}>Delete</button>
                        </div>
                       
                    </div>
                ))}
            </div>

            <div className="pages flex">
                <button onClick={() => PageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={() => PageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default Review;
