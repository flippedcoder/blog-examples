export const schema = gql`
  type Map {
    id: Int!
    name: String!
    startDate: DateTime!
    endDate: DateTime!
    mapUrl: String!
  }

  type NeoWProps {
    startDate: DateTime!
    endDate: DateTime!
    viewDate: DateTime!
  }

  type Asteroid {
    missDistance: String
    estimatedDiameter: String
  }

  input AsteroidInput {
    startDate: Date!
    endDate: Date!
    viewDate: Date!
  }

  type Query {
    asteroids(input: AsteroidInput): [Asteroid] @requireAuth
    maps: [Map!]! @requireAuth
    map(id: Int!): Map @requireAuth
  }

  input CreateMapInput {
    name: String!
    startDate: DateTime!
    endDate: DateTime!
    mapUrl: String!
  }

  input UpdateMapInput {
    name: String
    startDate: DateTime
    endDate: DateTime
    mapUrl: String
  }

  type Mutation {
    createMap(input: CreateMapInput!): Map! @requireAuth
    updateMap(id: Int!, input: UpdateMapInput!): Map! @requireAuth
    deleteMap(id: Int!): Map! @requireAuth
  }
`
