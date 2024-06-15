import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { join } from 'path';
import { gql } from 'graphql-tag';
import resolvers from './graphql/resolvers';
import { connectDb } from './config/db';

// Load schema from file and parse it
const typeDefs = gql(readFileSync(join(__dirname, './graphql/schema/user.graphql'), 'utf8'));

const startServer = async () => {
  // Initialize the Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Connect to the database
  await connectDb();

  // Start the server
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer();
