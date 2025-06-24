import { Router } from "express";
import { borrowController } from "./borrow.controller";

export const borrowRoutes = Router();

borrowRoutes.post("/", borrowController.borrowABook);
borrowRoutes.get("/", borrowController.getBorrowSummary);
