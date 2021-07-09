export const schema = gql`
  type Entry {
    id: Int!
    purchaseName: String!
    date: DateTime!
    description: String!
    amount: Float!
    category: String!
  }

  type Query {
    entries: [Entry!]!
    entry(id: Int!): Entry
  }

  input CreateEntryInput {
    purchaseName: String!
    date: DateTime!
    description: String!
    amount: Float!
    category: String!
  }

  input UpdateEntryInput {
    purchaseName: String
    date: DateTime
    description: String
    amount: Float
    category: String
  }

  type Mutation {
    createEntry(input: CreateEntryInput!): Entry!
    updateEntry(id: Int!, input: UpdateEntryInput!): Entry!
    deleteEntry(id: Int!): Entry!
  }
`
