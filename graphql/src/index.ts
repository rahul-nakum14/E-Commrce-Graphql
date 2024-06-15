import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';
import { connectDb } from './config/db';

const startServer = async () => {
  const app: Application = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  await connectDb();

  /* Needs to fix this app as any issue. */
  server.applyMiddleware({ app: app as any, path: "/graphql" });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch(error => {
  console.error("Error starting server:", error);
});
