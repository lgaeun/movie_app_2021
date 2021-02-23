import { GraphQLserver } from "graphql-yoga";

const server = new GraphQLServer({});

server.start(() => console.log("Graphql server is running"));
