import userResolvers from './user.resolver';

const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};

export default resolvers;


// import { mergeResolvers } from "@graphql-tools/merge";
// import { loadFilesSync } from "@graphql-tools/load-files";
// import path from "path";

// const resolversArray = loadFilesSync(path.join(__dirname, "./"), {
//   extensions: ["ts"],
// });
// const resolvers = mergeResolvers(resolversArray);

// export default resolvers;

