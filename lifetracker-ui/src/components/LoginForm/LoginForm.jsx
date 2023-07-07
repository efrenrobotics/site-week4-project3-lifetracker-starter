import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import apiClient from "../../../services/apiClient";

const LoginForm = ({ handleLogin }) => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // pass in data to apiClient
    const { data, error } = await apiClient.login({
      email: email,
      password: password,
    });

    if (error) {
      console.error("error logging in");
      setError(error);
    } else {
      setError("");
      handleLogin(data);
      nav("/activity");
    }
  };

  return (
    <div className="login-form">
      <form className="navbar-inputs" onSubmit={handleSubmit}>
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

        <button className="submit-login" type="submit">
          Login
        </button>
      </form>
      {error && <h2 className="error">login failed: try again</h2>}
    </div>
  );
};

export default LoginForm;
