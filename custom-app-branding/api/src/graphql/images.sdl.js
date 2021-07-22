export const schema = gql`
  type Image {
    id: Int!
    name: String!
    url: String!
    user: User!
    userId: Int!
  }

  type Query {
    images: [Image!]!
  }

  input CreateImageInput {
    name: String!
    url: String!
    userId: Int!
  }

  input UpdateImageInput {
    name: String
    url: String
    userId: Int
  }
`
