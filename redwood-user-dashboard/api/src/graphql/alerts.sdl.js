export const schema = gql`
  type Alert {
    id: Int!
    name: String!
    priority: String!
    team: Team!
    teamId: Int!
  }

  type Query {
    alerts: [Alert!]!
    alert(id: Int!): Alert
  }

  input CreateAlertInput {
    name: String!
    priority: String!
    teamId: Int!
  }

  input UpdateAlertInput {
    name: String
    priority: String
    teamId: Int
  }

  type Mutation {
    createAlert(input: CreateAlertInput!): Alert!
    updateAlert(id: Int!, input: UpdateAlertInput!): Alert!
    deleteAlert(id: Int!): Alert!
  }
`
