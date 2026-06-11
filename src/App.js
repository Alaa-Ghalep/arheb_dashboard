import './App.css';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import i18n from 'i18next';
import Dashboard from './Dashboard';
import Login from './Components/Login';
import Notification2 from './Components/Notification2';
import ADM from './Components/ADM';
import Sarvices from './Components/Sarvices';
import AddManager from './Components/AddManager';
import Tourists from './Components/Tourists';
import Touristguides from './Components/Touristguides';
import Controlpanel from './Components/Controlpanel';
import HotelDetails from './Components/HotelDetails';
import GuideDetails from './Components/GuideDetails';
import Settings from './Components/Settings';

function App() {
  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/Login" />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Notification2" element={<Notification2 />} />

      <Route element={<Dashboard />}>
        <Route path="/Dashboard" element={<Controlpanel />} />
        <Route path="/ADM" element={<ADM />} />
        <Route path="/Sarvices" element={<Sarvices />} />
        <Route path="/AddManager" element={<AddManager />} />
        <Route path="/Touristguides" element={<Touristguides />} />
        <Route path="/Tourists" element={<Tourists />} />
        <Route path="/HotelDetails" element={<HotelDetails />} />
        <Route path="/GuideDetails" element={<GuideDetails />} />
        <Route path="/Settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
