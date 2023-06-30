// setup dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// user authentication router
const userAuthRouter = require("./routes/AuthRoute");

// import config
const config = require("./config");

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

app.use("/auth", userAuthRouter);

// display home router
app.get("/", (req, res) => {
  return res.status(200).json({ ping: "pong" });
});

// NotFound Error handler
app.use((req, res, next) => {
  return next(new NotFoundError());
});

// Generic error handler
app.use((err, req, res, next) => {
  if (!config.IS_TESTING) console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
