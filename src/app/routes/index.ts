import { Router } from "express";
import { bookRoutes } from "../modules/book/book.routes";
import { borrowRoutes } from "../modules/borrow/borrow.routes";

export const appRoutes = Router();


appRoutes.use("/books", bookRoutes);
appRoutes.use("/borrow", borrowRoutes);

