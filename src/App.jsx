import "./styles/colors.css";
import "./styles/utilities.css";

import Authentication from "./MainWebsite/Pages/Authentication";
import Booking from "./MainWebsite/Pages/Booking";
import Landing from "./MainWebsite/Pages/Landing";
import Map from "./MainWebsite/Pages/Map";
import Profile from "./MainWebsite/Pages/Profile";
import Schedule from "./MainWebsite/Pages/Schedule";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
