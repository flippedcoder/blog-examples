export const schema = gql`
  type Snapshot {
    id: String!
    name: String!
    xPosition: Float!
    yPosition: Float!
    imageUrl: String!
  }

  type Query {
    snapshots: [Snapshot!]! @requireAuth
    snapshot(id: String!): Snapshot @requireAuth
  }

  input CreateSnapshotInput {
    name: String!
    xPosition: Float!
    yPosition: Float!
    imageUrl: String!
  }

  input UpdateSnapshotInput {
    name: String
    xPosition: Float
    yPosition: Float
    imageUrl: String
  }

  type Mutation {
    createSnapshot(input: CreateSnapshotInput!): Snapshot! @requireAuth
    updateSnapshot(id: String!, input: UpdateSnapshotInput!): Snapshot!
      @requireAuth
    deleteSnapshot(id: String!): Snapshot! @requireAuth
  }
`
