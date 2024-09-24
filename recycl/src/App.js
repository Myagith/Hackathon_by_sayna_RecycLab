import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';  
import LoginPage from './pages/LoginPage'; 
import SignupForm from './pages/SignupForm'; 
import CalendarPage from './components/CalendarPage';
import Historique from './pages/Historique';
import Signaler from './pages/Signaler';
import Avis from './pages/Avis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/calendar" element={<CalendarPage />} /> 
        <Route path="/historique" element={<Historique />} />
        <Route path="/signaler" element={<Signaler />} /> 
        <Route path="/avis" element={<Avis />} /> 
      </Routes>
    </Router>
  );
}

export default App;
