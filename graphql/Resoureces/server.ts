/** New code */

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./yourSchemaFile"; // Import your GraphQL schema and resolvers

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: "/graphql" }); // Expose GraphQL endpoint at /graphql

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


/** Old code */

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './graphql/resolvers';
import { connectDb } from './config/db';
import  typeDefs  from "./graphql/schema";

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await connectDb();
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer();
