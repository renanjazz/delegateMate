import { API_URL } from "../config";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  //
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const nav = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.get(`${API_URL}/users`);
      console.log("This is the data", data);
      const foundUser = data.find((oneUser) => {
        if (oneUser.username.toLowerCase() === username.toLowerCase()) {
          return true;
        }
      });
      console.log("Found user!", foundUser);
      if (!foundUser) {
        setError("Invalid credentials");
      } else {
        const passCheck = foundUser.password === password;
        console.log("does the password match", passCheck);
        if (passCheck) {
          setCurrentUser(foundUser);
          nav("/request-received");
        } else {
          setError("Something went wrong, please try again.");
        }
      }
    } catch (error) {
      console.log("Something is not quite right", error);
    }
  };
  const handleAddLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/users`, {
        name,
        surName,
        username: createUsername,
        password: createPassword,
        email,
        telephone,
        address,
        city,
        postcode,
      });
      console.log("User created", data);
      setCurrentUser(data);
      nav("/request-received");
    } catch (error) {
      console.log("Something went wrong");
    }
  };
  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              placeholder="Username"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="Password"
            />
            {/* <Link to="/request-received"> */}
            <button className="enter-button">Enter</button>
            {/* </Link> */}
          </label>
        </form>
        {error && (
          <p style={{ color: "red" }}>Invalid credentials, please try again</p>
        )}
        <h2>Don't have an account yet?</h2>
        <form onSubmit={handleAddLogin}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="Name"
            />
          </label>
          <label>
            Surname:
            <input
              type="text"
              value={surName}
              onChange={(event) => {
                setSurname(event.target.value);
              }}
              placeholder="Surname"
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              value={createUsername}
              onChange={(event) => {
                setCreateUsername(event.target.value);
              }}
              placeholder="Username"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={createPassword}
              onChange={(event) => {
                setCreatePassword(event.target.value);
              }}
              placeholder="Password"
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Email"
            />
          </label>
          <label>
            Telephone:
            <input
              type="text"
              value={telephone}
              onChange={(event) => {
                setTelephone(event.target.value);
              }}
              placeholder="Telephone"
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              placeholder="Address"
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
              placeholder="City"
            />
          </label>
          <label>
            Postcode:
            <input
              type="postcode"
              value={postcode}
              onChange={(event) => {
                setPostcode(event.target.value);
              }}
              placeholder="Postcode"
            />
          </label>
          <Link to="/open-request">
            <button className="back-button">Back</button>
          </Link>
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
