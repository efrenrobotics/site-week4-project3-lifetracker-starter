import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onLogin, loggedIn, setLoggedIn }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/activity">
        <button>Activity</button>
      </Link>

      <Link to="/exercise">
        <button>Exercise</button>
      </Link>

      <Link to="/nutrition">
        <button>Nutrition</button>
      </Link>

      <Link to="/sleep">
        <button>Sleep</button>
      </Link>

      {/* Display Sign Out button if user is logged in */}
      <Link to="/">{loggedIn && <button>Sign Out</button>}</Link>

      <Link to="/register">{!loggedIn && <button>Register</button>}</Link>

      <Link to="/login">{!loggedIn && <button>Login</button>}</Link>
    </div>
  );
};

export default Navbar;
