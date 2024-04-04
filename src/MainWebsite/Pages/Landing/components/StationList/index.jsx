import React from "react"
import ListCard from '../../../../Components/ListCard'
import './index.css'

const index = () => {
  return (
    <>
      <section class="cards-table">
        <h2>Stations List</h2>
        <div class="table">
          <ListCard />
          <ListCard col_1={"B Station"} col_2={"Beirut"} col_3={"24 / 7"} col_4={"Operational"}/>
          <ListCard col_1={"NYC Station"} col_2={"NewYorkCity"} col_3={"24 / 7"} col_4={"Under Maintenance"}/>
          <ListCard col_1={"Rio"} col_2={"Brasil"} col_3={"9 / 5"} col_4={"Operational"}/>
        </div>
      </section>
    </>
  )
}
export default index