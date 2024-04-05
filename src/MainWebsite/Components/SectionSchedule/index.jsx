import React from 'react';
import ListCard from '../ListCard';
import './index.css';

const index = ({ rides }) => {
  return (
    <div className='schedule-data'>
      <div className='schedules'>
        <h2>Select Departure</h2>
        <div className='rides'>
          {rides.length > 0 ? (
            rides.map(ride => (
              <ListCard
                key={ride.id}
                col_1={ride.departure_station.name}
                col_2={ride.arrival_station.name}
                col_3={ride.departure_time} 
                col_4={ride.status} 
              />
            ))
          ) : (
            <p>No rides available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default index