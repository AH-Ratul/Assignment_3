import { Request, Response } from "express";
import { Book } from "../book/book.model";
import { Borrow } from "./borrow.model";

const borrowABook = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const book = await Book.findById(body.book);

    if (book && book.isAvailabe()) {
      console.log("This Book is availabe for borrowing");
    } else {
      console.log("Book is not available");
    }

    if (book) {
      book.copies -= body.quantity;
      await book.save();
    }

    const borrow = await Borrow.create(body);

    res.status(201).json({
      success: true,
      message: "Book Borrowed successfully",
      data: borrow,
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

const getBorrowSummary = async (req: Request, res: Response) => {
  try {
    const result = await Borrow.aggregate([
      {
        $lookup: {
          from: "books",
          localField: "book",
          foreignField: "_id",
          as: "book",
        },
      },
      { $unwind: "$book" },
      {
        $group: {
          _id: "$book",
          title: { $first: "$book.title" },
          isbn: { $first: "$book.isbn" },
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $project: {
          _id: 0,
          book: {
            title: "$title",
            isbn: "$isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);

    res.status(200).json({
      status: true,
      message: "Borrowed books summary retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      status: false,
      error,
    });
  }
};

export const borrowController = {
  borrowABook,
  getBorrowSummary,
};
