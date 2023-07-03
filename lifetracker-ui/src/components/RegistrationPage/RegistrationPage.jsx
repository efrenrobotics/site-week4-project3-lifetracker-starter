import React from "react";
import "./RegistrationPage.css";

const RegistrationPage = ({ setLoggedIn }) => {
  const handleSubmit = () => {
    setLoggedIn(true);
  };
  return (
    <div>
      <h1>Registration Page</h1>
      <form className="navbar-inputs" onSubmit={handleSubmit}>
        <label>first name: </label>
        <input type="text"></input>

        <label>last name: </label>
        <input type="text"></input>

        <label>username: </label>
        <input type="text"></input>

        <label>email: </label>
        <input type="email"></input>

        <label>password: </label>
        <input type="password"></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
