import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/get-all-review',{
                    headers : {
                        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMTkxMDU5LCJleHAiOjE3MTIxOTQ2NTksIm5iZiI6MTcxMjE5MTA1OSwianRpIjoicFN5cTFzNnpkSWRBNGlUdiIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.UKLk4q_0CxqugOol05PmsT9W_RCH4ivVuEo9LJdKuCU`
                    }
                });
                const data = await response.json();
                setReviews(data.reviews);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const totalPages = Math.ceil(reviews.length / pageSize);

    const PageChange = (page) => {
        setCurrentPage(page);
    };

    const Delete = (id) => {
        setReviews(prevReviews => prevReviews.filter(reviews => reviews.id !== id));
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayRiviews = reviews.slice(startIndex, endIndex);

    return (
        <div className="rev flex column  center">
            <div className="heading-rev flex">
                <h2>Reviews</h2>
            </div>
            <div className=" cardss flex center ">
               
                    {displayRiviews.map(review =>( <div key ={review.id} className="card-review flex column">
                         <div  className="user-review flex">
                        <div>
                            <h2>{review.user_id}</h2>
                        </div>
                        <div>

                        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
                        </div>
                    </div>
                    
                    <div className="comment">
                        <p>{review.comment}</p>
                    </div>
                    
                    <div className="btn flex ">
                        <div>
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
                        </div>
                        
                        <button onClick={() => Delete(review.id)}>delete</button>
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
