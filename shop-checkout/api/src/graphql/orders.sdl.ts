export const schema = gql`
  type Order {
    id: String!
    createdAt: DateTime!
    items: [Item]!
    total: Float!
  }

  type Query {
    orders: [Order!]!
  }

  input CreateOrderInput {
    total: Float!
  }

  input UpdateOrderInput {
    total: Float
  }
`
