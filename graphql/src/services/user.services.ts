// src/services/user.service.ts
import UserModel from "../models/user.model";
import UserAttributes from "../types/userType";

class UserService {
  async getUserById(id: string): Promise<UserAttributes | null> {
    return await UserModel.findById(id);
  }

  async getAllUsers(): Promise<UserAttributes[] | null> {
    return await UserModel.find({});
  }

  async createUser(
    username: string,
    email: string,
    password: string
  ): Promise<UserAttributes> {
    const newUser = await new UserModel({ username, email, password });
    return newUser.save();
  }

  async updateUser(
    id: string,
    username: string,
    email: string,
    password: string
  ): Promise<UserAttributes | null> {
    return await UserModel.findByIdAndUpdate(
      id,
      { username, email, password },
      { new: true }
    );
  }

  async deleteUser(id: string): Promise<UserAttributes | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}

export default new UserService();
