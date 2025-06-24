import { ErrorRequestHandler } from "express";
import config from "../config";
import { AppError } from "../errorHandlers/AppError";
import { handleDuplicateField } from "../errorHandlers/handelDuplicateError";
import { handleCastError } from "../errorHandlers/handleCastError";
import { handleValidationError } from "../errorHandlers/handleValidationError";

export const globalErrorHandler: ErrorRequestHandler = (err, __, res, ___) => {
  let statusCode = err.statusCode || 500;
  let message = err?.message || "Something Went Wrong!!!";

  if (err instanceof AppError) {
    (statusCode = err?.statusCode), (message = err?.message);
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateField(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  } else if (err?.name === "CastError") {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  } else if (err.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    err,
    stack: config.NODE_ENV === "development" ? err.stack : null,
  });
};
