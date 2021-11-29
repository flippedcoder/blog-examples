export const schema = gql`
  type Fruit {
    id: String!
    label: String!
    value: Int!
  }

  type Query {
    fruits: [Fruit!]!
  }

  input CreateFruitInput {
    label: String!
    value: Int!
  }

  input UpdateFruitInput {
    label: String
    value: Int
  }
`
