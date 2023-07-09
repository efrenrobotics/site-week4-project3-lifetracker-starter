import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";
import white_logo from "../../../images/lifetracker_logo_white.png";
import "./Navbar.css";

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={white_logo} alt="lifetracker logo" />
      </Link>

      <NavLinks loggedIn={loggedIn} handleLogout={handleLogout} />
    </div>
  );
};

export default Navbar;
