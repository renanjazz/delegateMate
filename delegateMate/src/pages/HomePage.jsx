import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleProceed = () => {
    if (service && city) {
      navigate(`/companies?service=${service}&city=${city}`);
    } else {
      alert("Please let us know where, and how to help");
    }
  };

  return (
    <div className="home-page">
      <h1>Welcome to Our Service</h1>
      <p>Select a service and a city to find the best companies for your needs.</p>

      <div className="dropdown-container">
        <select value={service} onChange={(e) => setService(e.target.value)} className="dropdown">
          <option value="">Select Service</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrician">Electrician</option>
          <option value="Telephone Provider">Telephone Provider</option>
        </select>

        <select value={city} onChange={(e) => setCity(e.target.value)} className="dropdown">
          <option value="">Select City</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Berlin">Berlin</option>
        </select>
      </div>

      <button className="proceed-button" onClick={handleProceed}>Let's go!</button>
    </div>
  );
};

export default HomePage;