//representa los procesos necesarios para realizar el registro y autenticación
const { gql } = require("apollo-server");//invoca gql abreviacion de graphQL

//se definen las queries que son consultas de datos
// y mutations que transforman datos en la base de datos
const authTypes = gql`
    type Tokens{
        refresh: String!
        access: String!
    }

    type Access{
        access: String!
    }

    type UserDetail{
        id: Int!
        username: String!
        name: String!
        email: String
    }

    type UserUpdate{
        id: Int!
        username: String
        password: String!
        name: String!
        email: String
    }

    input Refresh{
        refresh: String!
    }

    input CredentialsInput{
        username: String!
        password: String!
    }

    input SingUpInput{
        username: String!
        password: String!
        name: String!
        email: String!
    }

    type Query{
        userDetailById(userId: Int!): UserDetail!
    }

    type Mutation{
        singUpUser(userInput: SingUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(token: Refresh): Access!
        updateUser(user: UserUpdate): UserDetail!
        deleteUser(userId: String!): String!
    }
`;
module.exports = authTypes;