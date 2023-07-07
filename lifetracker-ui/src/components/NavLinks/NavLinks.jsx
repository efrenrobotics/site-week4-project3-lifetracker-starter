import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = ({ loggedIn, handleLogout }) => {
  const handleClick = (e) => {};

  return (
    <div className="nav-links">
      <Link className="nav-button" to="/activity">
        Activity
      </Link>

      <Link className="nav-button" to="/nutrition">
        Nutrition
      </Link>

      <Link className="nav-button" to="/exercise">
        Exercise
      </Link>

      <Link className="nav-button" to="/sleep">
        Sleep
      </Link>

      {/* Display Sign Out button if user is logged in */}
      {loggedIn ? (
        <div>
          <Link className="logout-button" to="/" onClick={handleLogout}>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link className="logout-button" to="/register">
            Register
          </Link>
          <Link className="logout-button" to="/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
