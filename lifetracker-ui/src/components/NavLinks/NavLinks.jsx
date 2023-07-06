import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = ({ loggedIn }) => {
  const logoutUser = () => {
    // remove lifetracker_token from storage and reset user data
  };
  return (
    <div className="nav-links">
      <Link className="nav-button" to="/activity">
        <button>Activity</button>
      </Link>

      <Link className="nav-button" to="/nutrition">
        <button>Nutrition</button>
      </Link>

      <Link className="nav-button" to="/exercise">
        <button>Exercise</button>
      </Link>

      <Link className="nav-button" to="/sleep">
        <button>Sleep</button>
      </Link>

      {/* Display Sign Out button if user is logged in */}
      {loggedIn ? (
        <div className="logout-button" onSubmit={logoutUser}>
          <Link className="nav-button" to="/">
            <button type="submit">Sign Out</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link className="nav-button" to="/register">
            <button>Register</button>
          </Link>
          <Link className="nav-button" to="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
