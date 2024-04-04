import React, { useState, useEffect } from "react";
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import StationList from './components/StationList'
import Review from './components/Review'
import Footer from '../../Components/Footer'
import './style.css'
import { sendRequest } from "../../../core/tools/request";
import { requestMethods } from "../../../core/enums/requestMethods";

const Landing = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await sendRequest(requestMethods.GET, "/get-all-stations")
        setStations(response.data.stations)
      } catch (error) {
        console.error("Error fetching stations:", error)
      }
    };

    fetchStations();
  }, []);


  return (
    <div>
      <Header />
      <Hero />
      <StationList stations={stations} />
      <Review />
      <Footer />
    </div>
  );
};
export default Landing;
