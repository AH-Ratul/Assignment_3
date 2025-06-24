import { Request, Response } from "express";
import { Book } from "./book.model";
import { AppError } from "../../errorHandlers/AppError";
import { tryCatch } from "../../utils/tryCatch";

const addBook = tryCatch(async (req: Request, res: Response) => {
  const body = req.body;

  const book = await Book.create(body);

  res.status(201).json({
    status: true,
    message: "Book Created Successfully",
    data: book,
  });
});

const getAllBooks = tryCatch(async (req: Request, res: Response) => {
  const { filter, sort = "asc", sortBy = "createdAt", limit = 10 } = req.query;

  // filter
  const filterCondition: any = {};
  if (filterCondition) {
    filterCondition.genre = filter;
  }

  // sorting
  const sortCondition: any = {
    [sortBy as string]: sort === "desc" ? -1 : 1,
  };

  // limiting
  const limitNumber = parseInt(limit as string) || 10;

  const books = await Book.find(filterCondition)
    .sort(sortCondition)
    .limit(limitNumber);

  res.status(200).json({
    success: true,
    message: "Book retrieve successfully",
    count: books.length,
    data: books,
  });
});

const getBookById = tryCatch(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const book = await Book.findById(bookId);

  if (!book) {
    throw new AppError(404, "Book not found");
  }

  res.status(200).json({
    success: true,
    message: "Book retrieved successfully",
    data: book,
  });
});

const updateABook = tryCatch(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const updatedBody = req.body;

  const update = await Book.findByIdAndUpdate(bookId, updatedBody, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    message: "Book updated successfully",
    data: update,
  });
});

const deleteABook = tryCatch(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  await Book.findByIdAndDelete(bookId);

  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
    data: null,
  });
});

export const bookController = {
  addBook,
  getAllBooks,
  getBookById,
  updateABook,
  deleteABook,
};
