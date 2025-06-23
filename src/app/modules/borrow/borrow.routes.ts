import { Router } from "express";
import { borrowController } from "./borrow.controller";

export const borrowRoutes = Router();

borrowRoutes.post("/borrowABook", borrowController.borrowABook);
borrowRoutes.get("/borrowSummary", borrowController.getBorrowSummary);
