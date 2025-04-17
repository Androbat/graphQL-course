// GraphQL schema:
// A GraphQL schema is a central piece of a GraphQL server that defines 
// the structure of the data that clients can query. 
// It specifies the types of data available, the relationships between those types, 
// and the operations 
// (queries, mutations, and subscriptions) that can be performed on the data.


// TypeDefs:
// A type in GraphQL is a fundamental building block of the schema. 
// It defines the shape of an object, including its fields and their data types. 
// Types can be scalar (e.g., String, Int, Boolean) or custom object types.

export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String,
        platform: [String!]!
    }

    type Review {
        id: ID!,
        rating: Int,
        content: String!
    }

    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!
    }

    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }

`;

// @platform [String!]! -> means that both are required: the inner elements of the array
// and the array with all the elements inside it.

// We need to specify the Query property at the end, since that's the entry point
// for our requests. 
// In conclusion:
// * The type definitions are used to describe the data in the graph.
// * The Schema just contains the data the we're supposed to query.