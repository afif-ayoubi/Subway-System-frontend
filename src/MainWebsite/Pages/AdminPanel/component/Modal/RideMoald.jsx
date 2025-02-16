import React from "react";
import { useState,useEffect } from "react";
import "./ManagerModal.css"


const RideModal = ({onclose})=>{
  
  const [depLocation,setDepLocation] = useState('')
  const [arrLocation,setArrLocation] = useState('')
  const [depTime,setDepTime] = useState('')
  const [arrTime,setArrTime] = useState('')
  const [status,setStatus] = useState('')
  const [stations, setStations] = useState([]);

  
  useEffect(()=>{
    const getlocation = async()=>{
      try {
        const response = await fetch('http://127.0.0.1:8000/api/get-all-stations',{
        headers : {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjYyNjE1LCJleHAiOjE3MTI4Njc0MTUsIm5iZiI6MTcxMjI2MjYxNSwianRpIjoiTFAzSGxlcWRHRkwwUlplViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.19yz9cZNYDcAKgkxGJauNrT_zh39TIOMEHeC-BDIiX0`
        }
      })
      const data = await response.json();
      setStations(data.stations);
      } catch (error) {
        console.log(error)
      }
    }

    getlocation()  

  },[])
  const addRide = async (event)=>{
    event.preventDefault();
    console.log(depLocation,arrLocation,depTime,arrTime,status)
    const formData = new FormData();
    formData.append('departure_station_id', depLocation);
    formData.append('arrival_station_id', arrLocation);
    formData.append('departure_time', depTime);
    formData.append('arrival_time', arrTime);
    formData.append('status', status);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/add-ride', {
      method : 'POST',
      headers : {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjYyNjE1LCJleHAiOjE3MTI4Njc0MTUsIm5iZiI6MTcxMjI2MjYxNSwianRpIjoiTFAzSGxlcWRHRkwwUlplViIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.19yz9cZNYDcAKgkxGJauNrT_zh39TIOMEHeC-BDIiX0`
      },
      body: formData
    })
    const data  = await response.json()
    console.log(data)

  } catch (error) {
    console.log(error)
  }
  
  }
return (
    <div className="manager-cards flex center">
        <div className="managercard flex column">
        <h2 className="flex center ">Create New Ride</h2>
            <form className="flex column center" onSubmit={addRide}>
              <input type="text" name="Departure Time" placeholder="Departure Time" onChange={(e) => setDepTime(e.target.value)} />
              <input type="text" name="Arrival Time" placeholder="Arrival Time" onChange={(e) => setArrTime(e.target.value)} />
              <select value={depLocation} onChange={(e) => setDepLocation(e.target.value)}>
                  <option value="">Select Departure Location</option>
                  {stations.map(station => (
                      <option key={station.id} value={`${station.id}`}>
                          {station.name}
                      </option>
                  ))}
              </select>
              <select value={arrLocation} onChange={(e) => setArrLocation(e.target.value)}>
                  <option value="">Select Arrival Location</option>
                  {stations.map(station => (
                      <option key={station.id} value={`${station.id}`}>
                          {station.name}
                      </option>
                  ))}
              </select>

              <input type="text" name="status" placeholder="status" onChange={(e) => setStatus(e.target.value)} />

              <div className="btns flex center">
                 <button type="submit" className="add">Create</button>
               <button onClick={onclose} className="del">Close</button>
              </div>
            </form>
        </div>
       
    </div>
)
    
}

export default RideModal