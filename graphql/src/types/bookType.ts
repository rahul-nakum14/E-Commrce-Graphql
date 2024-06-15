// Mongooese Document
import mongoose, { Document } from "mongoose";

/**
 * Interface representing attributes of a book.
 * @interface BookAttributes
 *
 * @property {number} id - The unique identifier of the book.
 * @property {string} bookAuthor - The author of the book.
 * @property {string} bookName - Name of the book.
 */
interface BookAttributes extends Document {
  bookName: string;
  bookAuthor: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

export default BookAttributes;
