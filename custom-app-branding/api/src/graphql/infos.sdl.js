export const schema = gql`
  type Info {
    id: Int!
    balance: Float!
    lastLogin: DateTime!
    endDate: DateTime!
    user: User!
    userId: Int!
  }

  type Query {
    infos: [Info!]!
  }

  input CreateInfoInput {
    balance: Float!
    lastLogin: DateTime!
    endDate: DateTime!
    userId: Int!
  }

  input UpdateInfoInput {
    balance: Float
    lastLogin: DateTime
    endDate: DateTime
    userId: Int
  }
`
