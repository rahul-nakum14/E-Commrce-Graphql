import mongoose, { Schema } from 'mongoose';
import BookAttributes  from "../types/bookType";

/**
 * @typedef {Object} BookAttributes - Defines the attributes of a Book.
 *
 * @property {string}  bookName - The name of the Book. (Required)
 * @property {string}  bookAuthor - The author of the book. (Required)
 */
const bookSchema: Schema<BookAttributes> = new Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    bookAuthor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "books",
  }
);

// Create the model from the schema
const BookModel = mongoose.model<BookAttributes>('bookModel', bookSchema);

export default BookModel;
