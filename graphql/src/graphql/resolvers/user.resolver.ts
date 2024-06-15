// src/graphql/resolvers/user.resolvers.ts
import userService from "../../services/user.services";

const userResolvers = {
  Query: {
    getUser: async (_, { id }) => {
      const user = await userService.getUserById(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
    getUsers: async () => {
      return await userService.getAllUsers();
    },
  },

  Mutation: {
    addUser: async (_, { username, email, password }) => {
      return userService.createUser(username, email, password);
    },
    updateUser: async (_, { id, username, email, password }) => {
      const updatedUser = await userService.updateUser(
        id,
        username,
        email,
        password
      );
      if (!updatedUser) {
        return {
          success: false,
          message: "User not found",
          user: null,
        };
      }
      return {
        success: true,
        message: "User updated successfully",
        user: updatedUser,
      };
    },
    deleteUser: async (_, { id }) => {
      const deletedUser = await userService.deleteUser(id);
      if (!deletedUser) {
        return {
          success: false,
          message: "User not found",
          user: null,
        };
      }
      return {
        success: true,
        message: "User successfully deleted",
        user: deletedUser,
      };
    },
  },
};

export default userResolvers;
