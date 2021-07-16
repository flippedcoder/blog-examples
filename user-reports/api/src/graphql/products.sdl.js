export const schema = gql`
  type Product {
    id: Int!
    name: String!
    imageUrl: String!
    price: Float!
    quantity: Int!
    User: User
    userId: Int
  }

  type Query {
    products: [Product!]!
    product(id: Int!): Product
  }

  input CreateProductInput {
    name: String!
    imageUrl: String!
    price: Float!
    quantity: Int!
    userId: Int
  }

  input UpdateProductInput {
    name: String
    imageUrl: String
    price: Float
    quantity: Int
    userId: Int
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(id: Int!, input: UpdateProductInput!): Product!
    deleteProduct(id: Int!): Product!
  }
`
