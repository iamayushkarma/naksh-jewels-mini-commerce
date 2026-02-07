import { ApiError } from "../utils/ApiError.js";

const errorHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";
  // If error is our custom ApiError
  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
  }
  console.error(error);
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorHandler;
