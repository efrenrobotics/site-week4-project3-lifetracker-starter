import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <h1>login page</h1>
      <LoginForm className="form" handleLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
