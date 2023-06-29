class ErrorHandler extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

/** 400 BAD REQUEST error. */

class BadRequestError extends ErrorHandler {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}

/** 401 UNAUTHORIZED error. */

class UnauthorizedError extends ErrorHandler {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

/** 403 Forbidden error. */

class ForbiddenError extends ErrorHandler {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}

/** 404 NOT FOUND error. */

class NotFoundError extends ErrorHandler {
  constructor(message = "Not Found") {
    super(message, 404);
  }
}

/** 422 Unprocessable Entity error */

class UnprocessableEntityError extends ErrorHandler {
  constructor(message = "Unprocessable Entity") {
    super(message, 422);
  }
}

module.exports = {
  ErrorHandler,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  UnprocessableEntityError,
};
