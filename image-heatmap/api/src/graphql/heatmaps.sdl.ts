export const schema = gql`
  type Heatmap {
    id: String!
    originalImage: Image!
    imageId: Int!
    heatmapImage: String!
  }

  type Query {
    heatmaps: [Heatmap!]! @requireAuth
    heatmap(id: String!): Heatmap @requireAuth
  }

  input CreateHeatmapInput {
    imageId: Int!
    heatmapImage: String!
  }

  input UpdateHeatmapInput {
    imageId: Int
    heatmapImage: String
  }

  type Mutation {
    createHeatmap(input: CreateHeatmapInput!): Heatmap! @requireAuth
    updateHeatmap(id: String!, input: UpdateHeatmapInput!): Heatmap!
      @requireAuth
    deleteHeatmap(id: String!): Heatmap! @requireAuth
  }
`
