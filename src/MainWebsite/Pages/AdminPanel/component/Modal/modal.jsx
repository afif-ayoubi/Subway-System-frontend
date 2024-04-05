import React, { useEffect, useState } from "react";
import "./modal.css"

const  Modal = ({onclose})=> {

  const [name,setName] = useState('')
  const [address,setAdress] = useState('')
  const [manager,setManager] = useState('')
  const [facilities,setFacilities] =useState('')
  const [operation,setOperation] = useState('')
  const [status,setStatus] = useState('')
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  
    const handleInput = async (event) => {
      event.preventDefault()
      const formData = new FormData()
      formData.append('name',name)
      formData.append('address',address)
      formData.append('manager',manager)
      formData.append('facilities',facilities)
      formData.append('operation',operation)
      formData.append('status',status)
      formData.append('latitude', latitude)
      formData.append('longitude', longitude)

      try {
        const response = await fetch('http://127.0.0.1:8000/api/add-station',{
          method : 'POST',
          headers : {
            Authorization: `Bearer "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzEyMjA1OTIxLCJleHAiOjE3MTIyMDk1MjEsIm5iZiI6MTcxMjIwNTkyMSwianRpIjoiZHg5THFJQm92azh4bkNNZiIsInN1YiI6IjE4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.fMWSkygLjJrv4SbSBVi_UEKY8hvdzSgbR3aXuGO6ORY`
          },
          body: formData
        })
        const data = await response.json()
        if(response.ok){
          console.log(data)
        }else{
          throw new Error(response.data.message);
        }
        console.log(response)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    
  return (
    <div className="modal flex column center ">
      <div className="modal-content flex column ">
        <span className="close"></span>
          <h2 className="flex center">Create New Station</h2>
            <form className="flex column center" onSubmit={handleInput}>
              <input type="text" name="name" value={name} placeholder="Name"  onChange={(e)=>{setName(e.target.value)}}/>

              <input type="text" name="address" value={address} placeholder="Address" onChange={(e)=>{setAdress(e.target.value)}} />
              <input name=" Select Manager" value={manager} onChange={(e) => setManager(e.target.value)} className="select" />
              <input type="text" name="latitude" value={latitude} placeholder="Latitude" onChange={(e) => { setLatitude(e.target.value) }} /> 
              <input type="text" name="longitude" value={longitude} placeholder="Longitude" onChange={(e) => { setLongitude(e.target.value) }} />
              <input type="text" name="	Facilities" value={facilities} placeholder="	Facilities" onChange={(e)=>{setFacilities(e.target.value)}} />
              <input type="text" name="operation" value={operation} placeholder="Operation Hours"  onChange={(e)=>{setOperation(e.target.value)}}/>
              <input type="text" name="status"  value={status} placeholder="Status" onChange={(e)=>{setStatus(e.target.value)}} />
              <div className="btns flex center">
                 <button type="submit"  className="add">Create ++</button>
               <button onClick={onclose} className="del">Close</button>
              </div>
              
            </form>
      </div>
     </div>
  )
}
export default Modal