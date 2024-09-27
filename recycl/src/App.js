import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';  
import LoginPage from './pages/LoginPage'; 
import SignupForm from './pages/SignupForm'; 
import CalendarPage from './components/CalendarPage';
import Historique from './pages/Historique';
import SignalPage from './components/SignalPage';
import Avis from './pages/Avis';
import CameraCapture from './pages/CameraCapture';
import LocationPicker from './pages/LocationPicker';
import DescriptionForm from './pages/DescriptionForm';
import CodeGestion from './pages/CodeGestion';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/calendar" element={<CalendarPage />} /> 
        <Route path="/historique" element={<Historique />} />
        <Route path="/Signalpage" element={<SignalPage/>} />
        <Route path="/avis" element={<Avis />} /> 
        <Route path="/CameraCapture" element={<CameraCapture/>}/>
        <Route path="/LocationPicker" element={<LocationPicker/>}/>
        <Route path="/DescriptionForm" element={<DescriptionForm/>}/>
        <Route path="/Codegestion" element={<CodeGestion />} />

      </Routes>
    </Router>
  );
}

export default App;
