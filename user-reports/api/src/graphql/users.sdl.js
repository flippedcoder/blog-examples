export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    products: [Product]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
    getUserProducts(id: Int!): [Product]
  }

  input CreateUserInput {
    email: String!
    name: String!
  }

  input UpdateUserInput {
    email: String
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
