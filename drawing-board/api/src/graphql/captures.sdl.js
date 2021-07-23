export const schema = gql`
  type Capture {
    id: Int!
    name: String!
    url: String!
  }

  type Query {
    captures: [Capture!]!
  }

  input CreateCaptureInput {
    name: String!
    url: String!
  }

  input UpdateCaptureInput {
    name: String
    url: String
  }

  type Mutation {
    createCapture(input: CreateCaptureInput!): Capture!
  }
`
