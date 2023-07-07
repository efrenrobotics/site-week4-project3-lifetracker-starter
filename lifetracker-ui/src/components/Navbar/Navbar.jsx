import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import "./Navbar.css";

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="logo"
          src="/images/lifetracker_logo_white.png"
          alt="lifetracker logo"
        />
      </Link>

      <NavLinks loggedIn={loggedIn} handleLogout={handleLogout} />
    </div>
  );
};

export default Navbar;
