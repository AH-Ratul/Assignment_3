import { Router } from "express";
import { bookController } from "./book.controller";

export const bookRoutes = Router();

bookRoutes.post("/addBook", bookController.addBook);
bookRoutes.get("", bookController.getAllBooks);

bookRoutes
  .route("/:bookId")
  .get(bookController.getBookById)
  .patch(bookController.updateABook)
  .delete(bookController.deleteABook);

