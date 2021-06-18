export const schema = gql`
  type Setting {
    id: Int!
    videoName: String!
    loop: Boolean!
    controls: Boolean!
    volume: Float!
    playbackRate: Float!
  }

  input UpdateSettingInput {
    id: Int
    videoName: String
    loop: Boolean
    controls: Boolean
    volume: Float
    playbackRate: Float
  }

  type Mutation {
    updateSetting(input: UpdateSettingInput): Setting
  }

  type Query {
    setting(id: Int): Setting!
  }
`
