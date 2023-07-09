import React from "react";
import "./SleepCard.css";
const SleepCard = ({ startDateTime, endDateTime }) => {
  const startTime = formatHour(startDateTime);
  const endTime = formatHour(endDateTime);
  const date = formatDate(startDateTime);
  return (
    <div className="sleep-card">
      <h2>{date} </h2>
      <p>start time: {startTime}</p>
      <p>end time: {endTime}</p>
      <br></br>
      <br></br>
      <p>timestamp: {new Date(startDateTime).toLocaleString().split(",")[0]}</p>
    </div>
  );
};

const formatHour = (dateTime) => {
  const dt = new Date(dateTime);
  // Extract hour and minutes
  const hours = dt.getHours();
  const min = dt.getMinutes();
  // Format in the "hour:minutes" format
  const formatTime = `${hours}:${min.toString().padStart(2, "0")}`;
  return formatTime;
};

const formatDate = (dateTime) => {
  const dt = new Date(dateTime);
  // Extract the month, day, and year components
  const month = dt.toLocaleString("en-US", { month: "long" });
  const day = dt.getDate();
  const year = dt.getFullYear();

  // Format the date string in the "month day, year" format
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};

export default SleepCard;
