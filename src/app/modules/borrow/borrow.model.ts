import { model, Schema } from "mongoose";
import { IBorrow } from "../../interfaces/borrow.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: [true, "Book ID is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
      validate: {
        validator: Number.isInteger,
        message: "quantity must be an integer",
      },
    },
    dueDate: {
      type: Date,
      required: [true, "DueDate is required"],
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
