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
import ExercisePage from "../ExercisePage/ExercisePage";
import FeedTiles from "../FeedTiles/FeedTiles";
import Home from "../Home/Home";

/* Axios Imports */
import axios from "axios";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        {/* ALWAYS RENDER NAVBAR */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing loggedIn={loggedIn} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/register"
            element={<RegistrationPage setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/activity"
            element={loggedIn ? <ActivityPage /> : <AccessForbiden />}
          />
          <Route
            path="/nutrition/*"
            element={loggedIn ? <NutritionPage /> : <AccessForbiden />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
