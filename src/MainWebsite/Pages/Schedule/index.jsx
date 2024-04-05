import React, { useState, useEffect } from "react";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import SectionSchedule from '../../Components/SectionSchedule';
import { sendRequest } from "../../../core/tools/request";
import { requestMethods } from "../../../core/enums/requestMethods";

const Schedule = (station_id) => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await sendRequest(requestMethods.GET, `/rides-for-arrival/${station_id}`);
        setRides(response.data.rides);
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchRides();
  }, []);

  return (
    <div>
      <Header />
      <SectionSchedule rides={rides} />
      <Footer />
    </div>
  );
};

export default Schedule;