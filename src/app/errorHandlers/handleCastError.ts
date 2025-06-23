import { AppError } from "./AppError";

export const handleCastError = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(400, message);
};
