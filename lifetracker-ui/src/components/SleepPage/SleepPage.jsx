import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SleepCard from "../SleepCard/SleepCard";
import RecordSleep from "../RecordSleep/RecordSleep";
import "./SleepPage.css";
import apiClient from "../../../services/apiClient";
const SleepPage = ({ userID }) => {
  const [sleepEntries, setSleepEntries] = useState([]);

  useEffect(() => {
    const fetchSleepEntries = async () => {
      // try {
      //   const sleepRows = await apiClient.getSleepRows({
      //     params: userID,
      //   });
      //   setSleepEntries(sleepRows);
      // } catch (error) {
      //   // Handle error if needed
      // }
    };

    fetchSleepEntries();
  }, []);

  const [sleep, setSleep] = useState([
    {
      id: 2,
      start_time: "2023-07-07T05:00:00.000Z",
      end_time: "2023-07-07T13:00:00.000Z",
      user_id: 1,
    },
    {
      id: 3,
      start_time: "2023-07-07T05:00:00.000Z",
      end_time: "2023-07-07T13:00:00.000Z",
      user_id: 1,
    },
    {
      id: 4,
      start_time: "2023-07-07T05:00:00.000Z",
      end_time: "2023-07-07T13:00:00.000Z",
      user_id: 1,
    },
    {
      id: 5,
      start_time: "2023-07-07T05:00:00.000Z",
      end_time: "2023-07-07T13:00:00.000Z",
      user_id: 1,
    },
  ]);

  return (
    <div className="sleep-page">
      <SleepBanner />

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

const SleepBanner = () => {
  return (
    <div className="sleep-banner">
      <h1>Sleep</h1>
    </div>
  );
};

export default SleepPage;
