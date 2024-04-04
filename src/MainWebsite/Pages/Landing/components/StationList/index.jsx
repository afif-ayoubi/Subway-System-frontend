import React from "react";
import ListCard from '../../../../Components/ListCard';
import './index.css';

const Index = ({ stations }) => {

  if (!stations || stations.length === 0) {
    return (
      <div className="stations-list">
        <section className="cards-table">
          <h2>Stations List</h2>
          <div className="stat-table">
          <ListCard />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="stations-list">
      <section className="cards-table">
        <h2>Stations List</h2>
        <div className="stat-table">
        <ListCard />
          {stations.map(station => (
            <ListCard
              key={station.id}
              col_1={station.name}
              col_2={station.address}
              col_3={station.operating_hours}
              col_4={station.service_status}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Index