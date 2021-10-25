export const schema = gql`
  type User {
    id: String!
    name: String!
    photo: Photo
  }

  type Query {
    users: [User!]! @requireAuth
  }

  input CreateUserInput {
    name: String!
  }

  input UpdateUserInput {
    name: String
  }
`
