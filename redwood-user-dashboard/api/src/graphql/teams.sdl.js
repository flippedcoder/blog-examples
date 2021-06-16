export const schema = gql`
  type Team {
    id: Int!
    name: String!
    User: [User]!
    teamImg: String
  }

  type Query {
    teams: [Team!]!
    team(id: Int!): Team
  }

  input CreateTeamInput {
    name: String!
    teamImg: String
  }

  input UpdateTeamInput {
    name: String
    teamImg: String
  }

  type Mutation {
    createTeam(input: CreateTeamInput!): Team!
    updateTeam(id: Int!, input: UpdateTeamInput!): Team!
    deleteTeam(id: Int!): Team!
  }
`
