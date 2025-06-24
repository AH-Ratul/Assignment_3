import { Router } from "express";
import { bookController } from "./book.controller";

export const bookRoutes = Router();

bookRoutes.post("/", bookController.addBook);
bookRoutes.get("", bookController.getAllBooks);

bookRoutes
  .route("/:bookId")
  .get(bookController.getBookById)
  .patch(bookController.updateABook)
  .delete(bookController.deleteABook);

