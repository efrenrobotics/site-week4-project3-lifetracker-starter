const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { NotFoundError } = require("./utils/errors");
const config = require("./config");
const authRoutes = require("./routes/authRoutes");
const sleepRoutes = require("./routes/sleepRoutes");

const app = express();

// enable cross-origin resource sharing for all origins for all requests
app.use(cors());
// parse incoming requests with JSON payloads
app.use(express.json());
// log requests info
app.use(morgan("dev"));

// routes
app.use("/auth", authRoutes);
app.use("/sleep", sleepRoutes);

// health check
app.get("/", function (req, res) {
  return res.status(200).json({
    ping: "pong",
  });
});

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (!config.IS_TESTING) console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
