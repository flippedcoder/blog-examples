export const schema = gql`
  type Recipe {
    id: String!
    title: String!
    details: String!
    video: String!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: String!): Recipe
  }

  input CreateRecipeInput {
    title: String!
    details: String!
    video: String!
  }

  input UpdateRecipeInput {
    title: String
    details: String
    video: String
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe!
    updateRecipe(id: String!, input: UpdateRecipeInput!): Recipe!
    deleteRecipe(id: String!): Recipe!
  }
`
