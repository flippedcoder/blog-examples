export const schema = gql`
  type Meme {
    id: String!
    title: String!
    imageUrl: String!
    textTop: String
    textBottom: String
  }

  type Query {
    memes: [Meme!]!
    meme(id: String!): Meme
  }

  input CreateMemeInput {
    title: String!
    imageUrl: String!
    textTop: String
    textBottom: String
  }

  input UpdateMemeInput {
    title: String
    imageUrl: String
    textTop: String
    textBottom: String
  }

  type Mutation {
    createMeme(input: CreateMemeInput!): Meme!
    updateMeme(id: String!, input: UpdateMemeInput!): Meme!
    deleteMeme(id: String!): Meme!
  }
`
