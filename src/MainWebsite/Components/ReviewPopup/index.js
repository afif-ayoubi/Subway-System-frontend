import React, { useState } from 'react';

const ReviewPopup = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  const highlightStars = (starRating) => {
    if (starRating <= rating) {
      return '#2F3E46';
    } else {
      return '#ADB5BD';
    }
  };

  return (
    <div id="review-popup" className="review-popup flex center">
      <div className="review-card off-white-bg ">
        <div className="btn flex center">
          <button className="flight-btn box-shadow primary-bg off-white-text border-radius" onClick={() => toggleVisibilityforpopUp(true)}>Flight</button>
          <button className="airline-btn box-shadow onclick-nav-bg off-white-text border-radius" onClick={() => toggleVisibilityforpopUp(false)}>AirLine</button>
        </div>
        <div className="star-rate flex center">
          {[1, 2, 3, 4, 5].map((ratingValue) => (
            <div key={ratingValue} className="stars" data-rating={ratingValue} onClick={() => handleStarClick(ratingValue)} style={{ color: highlightStars(ratingValue) }}>&#9733;</div>
          ))}
        </div>

        <textarea name="" id="" cols="30" rows="5" placeholder="Describe Your Experience" className="light-bg"></textarea>
        <div className="submit flex center ">
          <button id="submit-btn" className="box-shadow primary-bg off-white-text border-radius">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPopup;
