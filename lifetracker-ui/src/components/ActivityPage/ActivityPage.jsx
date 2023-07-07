import React from "react";
import { Link } from "react-router-dom";
import "./ActivityPage.css";

const ActivityPage = () => {
  return (
    <div className="activity-page">
      <h1>activity feed</h1>
      <div className="log-buttons">
        <Link to="/exercise">
          <button>Add Exercise</button>
        </Link>
        <Link to="/sleep">
          <button>Log Sleep</button>
        </Link>
        <Link to="/nutrition">
          <button>Record Nutrition</button>
        </Link>
      </div>
    </div>
  );
};

export default ActivityPage;
