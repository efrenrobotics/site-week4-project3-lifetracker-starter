import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

/*
  LANDING
    |
    | - HERO
    |
    | - HABIT GRID
          |
          | - - HABIT CARD
          |
          | - - HABIT CARD
          |
          | - - HABIT CARD
*/

const Landing = () => {
  return (
    <div className="landing">
      <Hero />
      <HabitGrid />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="about">
        <h1>Efren's Lifetracker</h1>
        <h2>
          take control of your life <br></br> one step at a time
        </h2>
      </div>
      <img className="hero-img" src="./images/lifetracker_logo.png" />
    </div>
  );
};

const HabitGrid = () => {
  return (
    <div className="habit-grid">
      <Link className="habit-link" to="/activity">
        <HabitCard imgPath={"./images/activity.png"} category={"activity"} />
      </Link>
      <Link className="habit-link" to="/nutrition">
        <HabitCard imgPath={"./images/nutrition.png"} category={"nutrition"} />
      </Link>
      <Link className="habit-link" to="/sleep">
        <HabitCard imgPath={"./images/sleep.png"} category={"sleep"} />
      </Link>
      <Link className="habit-link" to="/exercise">
        <HabitCard imgPath={"./images/exercise.png"} category={"exercise"} />
      </Link>
    </div>
  );
};

const HabitCard = ({ imgPath, category }) => {
  return (
    <div className="habit-card">
      <img src={imgPath} alt={category} />
      <h3>{category}</h3>
    </div>
  );
};

export default Landing;
