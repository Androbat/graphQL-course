import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Types
import { typeDefs } from "./schema";
import db from "./_db";

// Resolvers -> Resolver functions should match the names in all the query part
// For example, We got: reviews query returns the data in reviews, then, we need
// a resolver function called "reviews"
const resolvers = {
    Query: {
        games: () => db.games,
        authors: () => db.authors,
        reviews: () => db.reviews,
    },

};

const server = new ApolloServer({
    typeDefs, // Schema should be passed here,
    resolvers
 });

const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
});


// TypeDefs - Map
// Resolvers