import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const CompanyPage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/CompanyPage`)
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error("No company wants to help you", error);
      });
  }, []);

  return (
    <div>
      <h1>Our Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <h2>{company.title}</h2>
            <p>{company.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyPage;
