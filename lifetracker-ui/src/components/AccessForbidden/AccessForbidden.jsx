import React from "react";
import { Link } from "react-router-dom";
import "./AccessForbidden.css";

const AccessForbidden = () => {
  return (
    <div className="access-forbidden">
      <h1>Access Forbidden</h1>
      <Link to="/login">
        <h3>Please login to gain access</h3>
      </Link>
    </div>
  );
};

export default AccessForbidden;
