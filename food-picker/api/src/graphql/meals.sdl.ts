export const schema = gql`
  type Meal {
    id: String!
    title: String!
    recipe: String!
    video: String!
  }

  type Query {
    meals: [Meal!]!
    meal(id: String!): Meal
  }

  input CreateMealInput {
    title: String!
    recipe: String!
    video: String!
  }

  input UpdateMealInput {
    title: String
    recipe: String
    video: String
  }

  type Mutation {
    createMeal(input: CreateMealInput!): Meal!
    updateMeal(id: String!, input: UpdateMealInput!): Meal!
    deleteMeal(id: String!): Meal!
  }
`
