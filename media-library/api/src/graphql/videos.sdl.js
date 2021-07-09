export const schema = gql`
  type Video {
    id: Int!
    name: String!
    duration: Float!
    url: String!
    user: User
  }

  type Query {
    videos: [Video!]!
    video(id: Int!): Video
  }

  input CreateVideoInput {
    name: String!
    duration: Float!
    url: String!
  }

  input UpdateVideoInput {
    name: String
    duration: Float
    url: String
  }

  type Mutation {
    createVideo(input: CreateVideoInput!): Video!
    updateVideo(id: Int!, input: UpdateVideoInput!): Video!
    deleteVideo(id: Int!): Video!
  }
`
