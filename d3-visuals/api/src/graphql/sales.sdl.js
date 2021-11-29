export const schema = gql`
  type Sale {
    id: String!
    year: Int!
    efficiency: Float!
    sales: Int!
  }

  type Query {
    sales: [Sale!]!
  }

  input CreateSaleInput {
    year: Int!
    efficiency: Float!
    sales: Int!
  }

  input UpdateSaleInput {
    year: Int
    efficiency: Float
    sales: Int
  }
`
