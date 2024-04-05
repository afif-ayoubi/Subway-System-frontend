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

import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate();

  const handleLoginClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <Header nav1="Home" nav2="Profile" nav3="Login" clickHandler3={() => handleLoginClick("/Authentication")} />
      <Hero />
      <StationList stations={stations} />
      <Review />
      <Footer />
    </div>
  );
};

export default Landing;
