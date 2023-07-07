import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import apiClient from "../../../services/apiClient";
const RegistrationPage = ({ onRegister }) => {
  const nav = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // pass data to apiClient
    console.log(`here`);

    const { data, error } = await apiClient.register({
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: userName,
      password: password,
    });

    console.log(`now here`);
    if (error) {
      console.error("error registering user");
      setError(error);
    } else {
      setError("");
      onRegister(data);
      nav("/activity");
    }
  };
  return (
    <div className="registration">
      <h1>registration page</h1>
      <div className="form">
        <form className="navbar-inputs" onSubmit={handleSubmit}>
          <label>first name: </label>
          <input
            className="form-input"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          ></input>

          <label>last name: </label>
          <input
            className="form-input"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          ></input>

          <label>username: </label>
          <input
            className="form-input"
            name="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          ></input>

          <label>email: </label>
          <input
            className="form-input"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>

          <label>password: </label>
          <input
            className="form-input"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>

          <button className="create-user" type="submit">
            create user
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
