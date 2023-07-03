import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form className="navbar-inputs">
        <label>email: </label>
        <input type="email"></input>

        <label>password: </label>
        <input type="password"></input>
      </form>
    </div>
  );
};

export default LoginPage;
