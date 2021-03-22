import { gql } from "apollo-server";

const typeDefs= gql`
    type Listing {
        description: String!
        id: ID!
        title: String!
    }

    type Heroku {
        nombre: String!
        id: ID!
        apellido: String!
    }

    type Partner {
        name: String!
        id: ID!
        website: String!
    }

    type User {
        email: String!
        id: ID!
    }

    type Query {
        listings: [Listing!]!
        heroku: [Heroku!]!
        partner: [Partner!]!
    }

    type Mutation {
        createUser(email: String!, password: String!): User!
    }


`;
export default typeDefs;