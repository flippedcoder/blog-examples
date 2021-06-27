export const schema = gql`
  type World {
    id: Int!
    imageName: String!
  }

  type Query {
    worlds: [World!]!
  }

  input CreateWorldInput {
    imageName: String!
  }

  input UpdateWorldInput {
    imageName: String
  }
`
