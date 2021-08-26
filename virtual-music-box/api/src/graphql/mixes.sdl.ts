export const schema = gql`
  type Mix {
    id: String!
    name: String!
    sample: String!
  }

  type Query {
    mixes: [Mix!]!
    mix(id: String!): Mix
  }

  input CreateMixInput {
    name: String!
    sample: String!
  }

  input UpdateMixInput {
    name: String
    sample: String
  }

  type Mutation {
    createMix(input: CreateMixInput!): Mix!
    updateMix(id: String!, input: UpdateMixInput!): Mix!
    deleteMix(id: String!): Mix!
  }
`
