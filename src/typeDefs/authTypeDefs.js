//representa los procesos necesarios para realizar procesos de registro y autenticación
const { gql } = require("apollo-server");

//se definen las queries que son consultas de datos
// y mutations que transforman datos y las operaciones que realizan 
const authTypes = gql`
  type Tokens {
    refresh: String!
    access: String!
  }
  type Access {
    access: String!
  }
  input Refresh {
    refresh: String!
  }
  input CredentialsInput {
    username: String!
    password: String!
  }
  input SingUpInput {
    username: String!
    password: String!
    name: String!
    email: String!
  }
  type UserDetail {
    id: Int!
    username: String!
    name: String!
    email: String
  }
  input UserUpdate {
    id: Int!
    username: String!
    password: String!
    name: String!
    email: String
  }
  type Query { 
    userDetailById(userId: Int!): UserDetail!
  }
  type Mutation {
    singUpUser(userInput: SingUpInput): Tokens!
    logIn(credentials: CredentialsInput!): Tokens!
    refreshToken(token: Refresh): Access!
    updateUser(user: UserUpdate): UserDetail!
    deleteUser(userId: String!): String!
  }
`;

module.exports = authTypes;