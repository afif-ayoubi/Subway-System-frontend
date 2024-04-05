import React from 'react';
import ReviewCard from './ReviewCard'
import './index.css'
const index = () => {
  return (
    <div className='review-section'>
      <h2 className='title'>What our people say about us</h2>
      <div className='rev-cards'>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  )
}
export default index