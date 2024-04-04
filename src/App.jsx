import "./styles/colors.css";
import "./styles/utilities.css";

import Authentication from "./MainWebsite/Pages/Authentication";
import Booking from "./MainWebsite/Pages/Booking";
import Landing from "./MainWebsite/Pages/Landing";
import Map from "./MainWebsite/Pages/Map";
import Profile from "./MainWebsite/Pages/Profile";
import Schedule from "./MainWebsite/Pages/Schedule";
import AdminPanel from "./MainWebsite/Pages/AdminPanel";
import ManagerPanel from "./MainWebsite/Pages/AdminPanel/ManagerPane;";
import Dashboard from "./MainWebsite/Pages/AdminPanel/component/Dashborad/dashboard";
import Branches from "./MainWebsite/Pages/AdminPanel/component/Branches/Branch";
import Coins from "./MainWebsite/Pages/AdminPanel/component/coins/coins";
import Manager from "./MainWebsite/Pages/AdminPanel/component/Maanager/Manager";
import SideBar from "./MainWebsite/Pages/AdminPanel/component/sidebar/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/AdminPanel" element={<AdminPanel />}/>
          <Route path="/ManagerPanel" element={<ManagerPanel />}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
