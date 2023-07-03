import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link>
        <button>Activity</button>
      </Link>

      <Link>
        <button>Exercise</button>
      </Link>

      <Link>
        <button>Nutrition</button>
      </Link>

      <Link>
        <button>Sleep</button>
      </Link>

      <Link to="/register">{!loggedIn && <button>Register</button>}</Link>

      <Link to="/login">{!loggedIn && <button>Login</button>}</Link>
    </div>
  );
};

export default Navbar;
