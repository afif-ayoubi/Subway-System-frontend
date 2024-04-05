import React from "react";
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import StationList from './components/StationList'
import Review from './components/Review'
import Footer from '../../Components/Footer'
import './style.css'
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
      <StationList />
      <Review />
      <Footer />
    </div>
  );
};

export default Landing;
