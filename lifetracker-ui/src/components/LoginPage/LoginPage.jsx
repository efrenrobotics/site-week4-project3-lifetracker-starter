import React from "react";
import { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form className="navbar-inputs" onSubmit={handleSubmit}>
        <label>email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>

        <label>password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
