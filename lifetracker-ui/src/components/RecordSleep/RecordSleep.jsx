import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecordSleep.css";
import apiClient from "../../../services/apiClient";

const RecordSleep = ({ userId, handleSleep }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await apiClient.createSleepEntry({
      start_time: startTime,
      end_time: endTime,
      user_id: userId,
    });

    if (error) {
      console.error(`error fetching data`);
    } else {
      handleSleep(data);
      nav("/sleep");
    }
  };

  return (
    <div className="sleep-container">
      <h1>record sleep</h1>
      <form className="sleep-form">
        <label>Start Time *</label>
        <input
          type="datetime-local"
          name="date"
          onChange={(e) => setStartTime(e.target.value)}
          required
        ></input>

        <label>End Time *</label>
        <input
          type="datetime-local"
          name="date"
          onChange={(e) => setEndTime(e.target.value)}
          required
        ></input>

        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default RecordSleep;
