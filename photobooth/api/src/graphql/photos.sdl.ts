export const schema = gql`
  type Photo {
    id: Int!
    url: String!
    userId: String!
    user: User!
  }

  type Query {
    photos: [Photo!]! @requireAuth
    photo(id: Int!): Photo @requireAuth
  }

  input CreatePhotoInput {
    url: String!
    userId: String!
  }

  input UpdatePhotoInput {
    url: String
    userId: String
  }

  type Mutation {
    createPhoto(input: CreatePhotoInput!): Photo! @requireAuth
    updatePhoto(id: Int!, input: UpdatePhotoInput!): Photo! @requireAuth
    deletePhoto(id: Int!): Photo! @requireAuth
  }
`
