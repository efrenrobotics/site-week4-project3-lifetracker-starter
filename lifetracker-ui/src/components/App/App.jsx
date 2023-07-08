import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
/* Router Imports */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Component Imports */
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import RecordSleep from "../RecordSleep/RecordSleep";
import AccessForbiden from "../AccessForbidden/AccessForbidden";
import NotFound from "../NotFound/NotFound";

/* Data Pages*/
import ActivityPage from "../ActivityPage/ActivityPage";
import NutritionPage from "../NutritionPage/NutritionPage";
import SleepPage from "../SleepPage/SleepPage";
import ExercisePage from "../ExercisePage/ExercisePage";

/* Axios & Authentication Imports */
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

function App() {
  // Track authentication state
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [sleep, setSleep] = useState([]);

  useEffect(() => {
    const checkLoggedIn = () => {
      const token = Cookies.get("token");
      if (token) {
        const decodeToken = jwtDecode(token);
        // console.log(decodeToken);
        setUserId(decodeToken.userId);
        setUserName(decodeToken.userName);
        // handle login state based on token expiration
        if (decodeToken.exp * 1000 > Date.now()) {
          setLoggedIn(true);
        } else {
          // expired token, update login state
          handleLogout();
        }
      }
    };

    checkLoggedIn();
  }, [userId]);

  const handleLogin = async (data) => {
    try {
      const { token, user, message } = data;
      if (user) {
        Cookies.set("token", token);
        setLoggedIn(true);
        setLoginError("");
        console.log(message); // display success login message
        setUserName(user.userName);
        setUserId(user.userId);
      } else {
        setLoginError(message);
        console.log(message); // display failed login message
      }
    } catch (e) {
      console.error(`Login Failed : ${e}`);
    }
  };

  const handleRegistration = async (data) => {
    try {
      const { token, user, message } = data;
      if (user) {
        Cookies.set("token", token);
        setLoggedIn(true);
        console.log(`message: ${message}`);
        setUserName(user.userName);
        setUserId(user.userId);
      } else {
        console.log(`no user message: ${message}`);
      }
    } catch (e) {
      console.error(`Registration Failed: ${e}`);
    }
  };

  const handleLogout = () => {
    console.log(`logout`);
    Cookies.remove("token");
    setLoggedIn(false);
    setUserName("");
    setUserId("");
    setSleep([]);
  };

  const handleSleep = (sleepEntry) => {
    setSleep([...sleep, sleepEntry]);
  };

  return (
    <div className="app">
      <BrowserRouter>
        {/* always render navbar */}
        <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Landing loggedIn={loggedIn} />} />
          {/* Login/Register if not logged in */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<RegistrationPage onRegister={handleRegistration} />}
          />
          {/* render page if logged in, otherwise access forbidden */}
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
            element={loggedIn ? <ExercisePage /> : <AccessForbiden />}
          />

          <Route
            path="/sleep"
            element={
              loggedIn ? (
                <SleepPage loggedIn={loggedIn} userID={userId} />
              ) : (
                <AccessForbiden />
              )
            }
          />

          <Route
            path="/sleep/create"
            element={<RecordSleep userId={userId} handleSleep={handleSleep} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
