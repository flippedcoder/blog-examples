export const schema = gql`
  type Layout {
    id: Int!
    name: String!
    dataLocation: String!
    imageUrl: String!
    user: User!
    userId: Int!
  }

  type Query {
    layouts: [Layout!]!
    layout(id: Int!): Layout
  }

  input CreateLayoutInput {
    name: String!
    dataLocation: String!
    imageUrl: String!
    userId: Int!
  }

  input UpdateLayoutInput {
    name: String
    dataLocation: String
    imageUrl: String
    userId: Int
  }

  type Mutation {
    createLayout(input: CreateLayoutInput!): Layout!
    updateLayout(id: Int!, input: UpdateLayoutInput!): Layout!
    deleteLayout(id: Int!): Layout!
  }
`
