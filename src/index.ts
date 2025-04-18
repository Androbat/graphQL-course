import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Types
import { typeDefs } from './schema.ts';
import db from "./_db.ts";

// Resolvers -> Resolver functions should match the names in all the query part
// For example, We got: reviews query returns the data in reviews, then, we need
// a resolver function called "reviews"
const resolvers = {
    Query: {
        games: () => db.games,
        authors: () => db.authors,
        reviews: () => db.reviews,
        // parant is the first parameter
        review: (_, args) => db.reviews.find((review) => review.id === args.id)
    },
    Game: {
        // 
        reviews(parent){
            
            return db.reviews.filter((review) => {
                return review.game_id === parent.id
            })
        }
    },
    Author: {
        reviews(parent){
            return db.reviews.filter((review) => {
                return review.author_id === parent.id
            })
        }
    },
    Review: {
        author(parent){
           return db.authors.find((a) => {
                return a.id === parent.author_id
           }) 
        },
        game(parent){
            return db.games.find((g) => g.id === parent.game_id)
        }
    }

};

const server = new ApolloServer({
    typeDefs, // Schema should be passed here,
    resolvers
 });

 const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀  Server ready at: ${url}`);
// TypeDefs - Map
// Resolvers