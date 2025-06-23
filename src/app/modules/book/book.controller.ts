import { Request, Response } from "express";
import { Book } from "./book.model";

const addBook = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const book = await Book.create(body);

    res.status(201).json({
      status: true,
      message: "Book Created Successfully",
      data: book,
    });
  } catch (error: any) {
    //console.log("Error -> ", error);

    res.status(400).json({
      status: false,
      message: error.name,
      error,
    });
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const {
      filter,
      sort = "asc",
      sortBy = "createdAt",
      limit = 10,
    } = req.query;

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
      status: true,
      message: "Book retrieve successfully",
      count: books.length,
      data: books,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).json({
      status: false,
      message: "Server error",
    });
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.bookId);

    res.status(200).json({
      status: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error: any) {
    //console.log(error);

    res.status(400).json({
      status: false,
      message: error.name,
      error,
    });
  }
};

const updateABook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const updatedBody = req.body;

    const update = await Book.findByIdAndUpdate({ _id: bookId }, updatedBody, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: true,
      message: "Book updated successfully",
      data: update,
    });
  } catch (error: any) {
    //console.log(error);

    res.status(400).json({
      status: false,
      message: error.name,
      error,
    });
  }
};

const deleteABook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;

    await Book.findByIdAndDelete(bookId);

    res.status(200).json({
      status: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error: any) {
    //console.log(error);

    res.status(400).json({
      status: false,
      message: error.name,
      error,
    });
  }
};

export const bookController = {
  addBook,
  getAllBooks,
  getBookById,
  updateABook,
  deleteABook,
};
