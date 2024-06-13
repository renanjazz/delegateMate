import { API_URL } from "../config";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateRequestPage = () => {
  const [standard, setStandard] = useState("standard (5-365 days)");
  const [expedited, setExpedited] = useState("expedited (yesterday)");

  const handleAddStandard = async (event) => {
    try {
      const { data } = await axios.post(`${API_URL}/create-request-page`, {
        standard,
      });
      console.log("Standard chosen", data);
    } catch (error) {
      console.log("Something went wrong choosing standard");
    }
  };
  const handleAddExpedited = async (event) => {
    // event.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/create-request-page`, {
        expedited,
      });
      console.log("Expedited chosen", data);
    } catch (error) {
      console.log("Something went wrong choosing expedited");
    }
  };

  return (
    <>
      <div>
        <h2>Your request</h2>
        <div className="your-request-greater-container">
          <div className="your-request-container">
            <h4>Scope of service</h4>
            <ul>
              <li>
                We'll make all the boring calls necessary to fulfil the request
              </li>
              <li>The relevant service provider will then solve your issue</li>
              <li>
                Upon completion, the transaction of the below amount will be
                concluded
              </li>
            </ul>
            <h4>Cost</h4>
            <p>
              <u>120 EUR</u> <i>(incl. VAT + service fee)</i>
            </p>
            <h4>Your current problem</h4>
            <p>Please specify the problem you are experiencing below:</p>
            <div>
              <label>
                <input
                  className="problem-input"
                  type="text"
                  placeholder="Your issue"
                />
              </label>
            </div>
            <h4>Delivery</h4>
            <button
              className="standard-delivery-button"
              onClick={() => handleAddStandard(standard) } 
            >
              <strong>Standard delivery:</strong> 5-365 days
            </button>
            <button
              onClick={() => handleAddExpedited(expedited)}
              className="expedited-delivery-button"
            >
              <strong>Expedited delivery:</strong> yesterday <i>(+1000 EUR)</i>
            </button>
          </div>
        </div>
        <div className="back-next-container">
          <Link to="/companies">
            <button className="proceed-button">Back</button>
          </Link>
          <Link to="/login">
            <button className="proceed-button">Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateRequestPage;
