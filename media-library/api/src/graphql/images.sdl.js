export const schema = gql`
  type Image {
    id: Int!
    name: String!
    url: String!
    User: User
  }

  type Query {
    images: [Image!]!
    image(id: Int!): Image
  }

  input CreateImageInput {
    name: String!
    url: String!
  }

  input UpdateImageInput {
    name: String
    url: String
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image!
    updateImage(id: Int!, input: UpdateImageInput!): Image!
    deleteImage(id: Int!): Image!
  }
`
