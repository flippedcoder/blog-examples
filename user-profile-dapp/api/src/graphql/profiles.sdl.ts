export const schema = gql`
  type Profile {
    id: String!
    updatedAt: DateTime!
    email: String!
    blockchainAddress: String!
  }

  type Query {
    profiles: [Profile!]!
    profile(id: String!): Profile
  }

  input CreateProfileInput {
    email: String!
    updatedAt: DateTime!
    blockchainAddress: String!
  }

  input UpdateProfileInput {
    email: String
    blockchainAddress: String
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile!
    updateProfile(id: String!, input: UpdateProfileInput!): Profile!
    deleteProfile(id: String!): Profile!
  }
`
