export const schema = gql`
  type User {
    id: Int!
    name: String!
    info: [Info]!
    image: [Image]!
    layout: [Layout]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    name: String!
  }

  input UpdateUserInput {
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
