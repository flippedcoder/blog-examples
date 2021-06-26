export const schema = gql`
  type Property {
    id: Int!
    width: Int!
    height: Int!
    videoDuration: Int!
    slideDuration: Int!
    transitionDuration: Int!
    videos: [String]!
  }

  type Query {
    properties: [Property!]!
  }

  input CreatePropertyInput {
    width: Int!
    height: Int!
    videoDuration: Int!
    slideDuration: Int!
    transitionDuration: Int!
    videos: [String]!
  }

  input UpdatePropertyInput {
    width: Int
    height: Int
    videoDuration: Int
    slideDuration: Int
    transitionDuration: Int
    videos: [String]!
  }

  type Mutation {
    createProperty(input: CreatePropertyInput): Property
  }
`
