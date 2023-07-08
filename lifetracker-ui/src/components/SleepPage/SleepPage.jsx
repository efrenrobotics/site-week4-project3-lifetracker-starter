import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SleepCard from "../SleepCard/SleepCard";
import Banner from "../Banner/Banner";
import RecordSleep from "../RecordSleep/RecordSleep";
import Loading from "../Loading/Loading";
import "./SleepPage.css";
import apiClient from "../../../services/apiClient";
const SleepPage = ({ userID, loggedIn }) => {
  const [sleepEntries, setSleepEntries] = useState([]);

  useEffect(() => {
    const fetchSleepEntries = async () => {
      try {
        console.log(userID);
        if (userID) {
          const sleepRows = await apiClient.getSleepRows(userID);

          console.log(`Request completed: ${sleepRows}`);
          setSleepEntries(sleepRows.data.sleepRes);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSleepEntries();
  }, [userID]);

  if (sleepEntries === null) {
    return <Loading />;
  }

  return (
    <div className="sleep-page">
      <Banner pageName={"Sleep"} />
      <div className="sleep-feed">
        <Link className="create-btn" to="/sleep/create">
          record sleep
        </Link>
      </div>

      <div className="grid">
        {sleepEntries.map((sleepEntry) => {
          return (
            <SleepCard
              key={sleepEntry.id}
              startDateTime={sleepEntry.start_time}
              endDateTime={sleepEntry.end_time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SleepPage;
