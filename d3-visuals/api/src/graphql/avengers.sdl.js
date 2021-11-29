export const schema = gql`
  type Avenger {
    id: String!
    group: String!
    axis: String!
    value: Int!
    description: String!
  }

  type Query {
    avengers: [Avenger!]!
  }

  input CreateAvengerInput {
    group: String!
    axis: String!
    value: Int!
    description: String!
  }

  input UpdateAvengerInput {
    group: String
    axis: String
    value: Int
    description: String
  }
`
