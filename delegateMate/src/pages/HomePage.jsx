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
          Need to fix your plumbing, subscribe to a WIFI plan or contact any other service provider? We're here to help! 
          delegateMate will handle your most boring and time consuming calls, in a wide range of languages.
         Simply make a request, and we'll do the rest.
        </h4>
        <form onSubmit={handleLetsGo}>
          <label>
            Service:
            <select
                
            />
            </label> 
        </form>
      </div>
    </>
  );
};

export default HomePage;




//       <Link to="/login">Login</Link>
