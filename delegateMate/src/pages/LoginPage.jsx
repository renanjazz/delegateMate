import React, { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  // TO-DO - fake login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  function handleLogin(event) {
    event.preventDefault();
    const existingLogin = {
      username,
      password,
    };
    console.log("user is logging in", existingLogin);
  }
  function handleAddLogin(event) {
    event.preventDefault();
    const newLogin = {
      name,
      surName,
      createUsername,
      createPassword,
      email,
      telephone,
      address,
      city,
      postcode,
    };
    console.log("new login added", newLogin);
  }
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
            <button className="enter-button">Enter</button>
          </label>
        </form>
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
