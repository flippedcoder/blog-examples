export const schema = gql`
  type Team {
    id: Int!
    name: String!
    User: [User]!
  }

  type Query {
    teams: [Team!]!
    team(id: Int!): Team
  }

  input CreateTeamInput {
    name: String!
  }

  input UpdateTeamInput {
    name: String
  }

  type Mutation {
    createTeam(input: CreateTeamInput!): Team!
    updateTeam(id: Int!, input: UpdateTeamInput!): Team!
    deleteTeam(id: Int!): Team!
  }
`
