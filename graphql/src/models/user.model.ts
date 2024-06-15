import mongoose, { Schema } from "mongoose";
import UserAttributes from "../types/userType";

/**
 * @typedef {Object} UserAttributes - Defines the attributes of a user.
 *
 * @property {string}  username - The name of the product. (Required)
 * @property {string}  email - The price of the product. (Required)
 * @property {string}  password - The password of the user. (Required)
 */
const userSchema: Schema<UserAttributes> = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "userModel",
  }
);

const UserModel = mongoose.model<UserAttributes>("userModel", userSchema);

export default UserModel;
