import * as React from "react";
import { useState } from "react";
import "./App.css";
/* Router Imports */
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
/* Component Imports */
import ActivityPage from "../ActivityPage/ActivityPage";
import AccessForbiden from "../AccessForbidden/AccessForbidden";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
import NutritionPage from "../NutritionPage/NutritionPage";
import SleepPage from "../SleepPage/SleepPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import FeedTiles from "../FeedTiles/FeedTiles";
import Home from "../Home/Home";

/* Axios Imports */
import axios from "axios";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (email, password) => {
    setLoggedIn(true);
    console.log(`logged in ${loggedIn}`);
  };
  return (
    <div className="app">
      <BrowserRouter>
        {/* ALWAYS RENDER NAVBAR */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing loggedIn={loggedIn} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<RegistrationPage setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/activity"
            element={loggedIn ? <ActivityPage /> : <AccessForbiden />}
          />
          <Route
            path="/nutrition"
            element={loggedIn ? <NutritionPage /> : <AccessForbiden />}
          />

          <Route
            path="/exercise"
            element={loggedIn ? <NutritionPage /> : <AccessForbiden />}
          />

          <Route
            path="/sleep"
            element={loggedIn ? <SleepPage /> : <AccessForbiden />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
