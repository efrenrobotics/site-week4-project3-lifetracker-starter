import React from "react";

/*
  HOME
    |
    | - HERO
    |
    | - HABIT GRID
*/

const Home = () => {
  return (
    <div>
      <Hero />
      <HabitGrid />
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <h1>Efren's Lifetracker</h1>
      <h3>
        Take control of your life <br></br> one step at a time
      </h3>
    </div>
  );
};

const HabitGrid = () => {};

export default Home;
