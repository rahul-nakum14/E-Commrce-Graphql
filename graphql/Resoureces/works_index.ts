import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = gql`
  type User {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    hello: String!
    randomNumber: Int!
    queryUsers: [User]!
  }

  type Mutation {
    addUser(firstName:String!, lastName:String!, email:String!): User!
  }
`;

const users = [
  {
    
    firstName: "GraphQL",
    lastName: "isCool",
    email: "GraphQL@isCool.com"
  },
];

const resolvers = {
  Query: {
    hello: () => "Hello world !!",
    randomNumber: () => Math.round(Math.random() * 10),
    queryUsers: () => users
  },
  Mutation: {
    addUser: (parent, args) => {
      users.push(args); 
      return args; 
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 8080 },
  });
  console.log(`GraphQL server running at ${url}`);
}

startServer();
