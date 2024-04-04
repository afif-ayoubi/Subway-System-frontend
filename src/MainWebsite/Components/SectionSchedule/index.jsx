import React from 'react';
import SearchCard from '../../Components/SearchCard'
import ListCard from '../../Components/ListCard'
import './index.css'

const index = () => {
  return (
    <div className='schedule-data'>
      <SearchCard />
      <div className='schedules'>
        <h2>Select Departure</h2>
        <div className='rides'>
          <ListCard col_1='Ride' col_2='from' col_3='to' col_4='' height='small'/>
          <ListCard col_1='Ride' col_2='from' col_3='to' col_4='' height='small'/>
          <ListCard col_1='Ride' col_2='from' col_3='to' col_4='' height='small'/>
        </div>
      </div>
    </div>
  )
}
export default index