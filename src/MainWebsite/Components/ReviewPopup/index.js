import React, { useState } from 'react';

const ReviewPopup = ({ onClose }) => {
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
    <div className="popup-container">
      <div className="popup">
        <h2>Leave a Review</h2>
        <div className="star-rate flex center">
          {[1, 2, 3, 4, 5].map((ratingValue) => (
            <div
              key={ratingValue}
              className="stars"
              data-rating={ratingValue}
              onClick={() => handleStarClick(ratingValue)}
              style={{ color: highlightStars(ratingValue) }}
            >
              &#9733;
            </div>
          ))}
        </div>
        <textarea
          cols="30"
          rows="5"
          placeholder="Describe Your Experience"
          className="light-bg"
        ></textarea>
        <div className="submit flex center">
          <button className="box-shadow primary-bg off-white-text border-radius">
            Submit
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ReviewPopup;
