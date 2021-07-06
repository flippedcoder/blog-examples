export const schema = gql`
  type User {
    id: Int!
    username: String!
    image: Image
    videos: [Video]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    username: String!
  }

  input UpdateUserInput {
    username: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
