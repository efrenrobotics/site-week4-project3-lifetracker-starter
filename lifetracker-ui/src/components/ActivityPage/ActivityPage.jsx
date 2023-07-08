import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./ActivityPage.css";

const ActivityPage = () => {
  return (
    <div className="activity-page">
      <Banner pageName="activity feed" />
      <div className="log-buttons">
        <Link className="nav-button" to="/exercise">
          Add Exercise
        </Link>
        <Link className="nav-button" to="/sleep">
          Log Sleep
        </Link>
        <Link className="nav-button" to="/nutrition">
          Record Nutrition
        </Link>
      </div>
      <div className="activity grid">
        <Activities activityName="Nutrition" />
        <Activities activityName="Exercise" />
        <Activities activityName="Sleep" />
      </div>
    </div>
  );
};

const Activities = ({ activityName }) => {
  return (
    <div>
      <h1>{activityName}</h1>
      <h2>Total {activityName}: </h2>
      <span></span>
      <p></p>
    </div>
  );
};

export default ActivityPage;
