export const schema = gql`
  type Item {
    id: String!
    name: String!
    price: Float!
    url: String!
    Order: Order
    orderId: String
  }

  type Query {
    items: [Item!]!
  }

  input CreateItemInput {
    name: String!
    price: Float!
    url: String!
    orderId: String
  }

  input UpdateItemInput {
    name: String
    price: Float
    url: String
    orderId: String
  }
`
