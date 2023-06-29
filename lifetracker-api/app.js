// setup dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// user authentication router
const userAuthRouter = require("./routes/AuthRoute");

// import error handling methods
const {
  ErrorHandler,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  UnprocessableEntityError,
} = require("./utils/errors");

const app = express();

// mount middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// display home router
app.get("/", (req, res) => {
  return res.status(200).json({ ping: "pong" });
});

module.exports = app;
