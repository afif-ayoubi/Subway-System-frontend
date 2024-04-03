import React from "react";
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import StationList from './components/StationList'
import './style.css'

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <StationList />
    </div>
  );
};
export default Landing;
