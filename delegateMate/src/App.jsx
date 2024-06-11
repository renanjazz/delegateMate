import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import About from './pages/About';
import CompanyPage from './pages/CompanyPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import OpenRequestPage from './pages/OpenRequestPage'; 
import RequestReceivedPage from './pages/RequestReceivedPage';b
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Terms from './pages/Terms';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('/OpenRequestPage')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<CompanyPage />} />
        <Route path="/requests" element={<RequestReceivedPage />} />
        <Route path="/open-request" element={<OpenRequestPage userData={userData} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;