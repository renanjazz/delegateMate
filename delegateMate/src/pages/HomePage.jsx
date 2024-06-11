import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";


const HomePage = () => {
  const [service, setService] = useState("");
  const [city, setCity] = useState("");

  function handleLetsGo(event) {
    event.preventDefault();
    const newRequest = {
      service,
      city
    };
    console.log("new request", newRequest)
  }

  return (
    <> 
      <div>
        <h1>delegateMate</h1>
        <h4 className="homepage-text">
          Need to fix your plumbing, subscribe to a WIFI plan or contact any other service provider? delegateMate is here to help! 
          We will handle your most boring and time consuming calls, in a wide range of languages.
         Simply make a request, and we'll do the rest.
        </h4>
        <form onSubmit={handleLetsGo} className="homepage-form">
          <label className="option-label">
            Service:
            <select className="dropdown-box">
             <option className="dropdown-content" value="--">--</option>
              <option className="dropdown-content" value="Plumbing">Plumbing</option>
              <option className="dropdown-content" value="Telephone Provider">Telephone Provider</option>
              <option className="dropdown-content" value="Electrician">Electrician</option>
            </select>
          </label> 
          <label className="option-label">
            City:
            <select className="dropdown-box">
             <option className="dropdown-content" value="--">--</option>
              <option className="dropdown-content" value="Lisbon">Lisbon</option>
              <option className="dropdown-content" value="Berlin">Berlin</option>
            </select>
          </label> 
          <button className="proceed-button">Let's go!</button>
        </form>
      </div>
    </>
  );
};

export default HomePage;

