export const schema = gql`
  type Setting {
    id: Int!
    videoName: String!
    loop: Boolean!
  }

  input CreateSettingInput {
    videoName: String!
    loop: Boolean!
  }

  input UpdateSettingInput {
    id: Int
    videoName: String
    loop: Boolean
  }

  type Mutation {
    updateSetting(input: UpdateSettingInput): Setting
  }

  type Query {
    setting(id: Int): Setting!
  }
`
