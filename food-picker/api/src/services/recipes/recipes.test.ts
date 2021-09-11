import {
  recipes,
  recipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from './recipes'
import type { StandardScenario } from './recipes.scenarios'

describe('recipes', () => {
  scenario('returns all recipes', async (scenario: StandardScenario) => {
    const result = await recipes()

    expect(result.length).toEqual(Object.keys(scenario.recipe).length)
  })

  scenario('returns a single recipe', async (scenario: StandardScenario) => {
    const result = await recipe({ id: scenario.recipe.one.id })

    expect(result).toEqual(scenario.recipe.one)
  })

  scenario('creates a recipe', async () => {
    const result = await createRecipe({
      input: { title: 'String', details: 'String', video: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.details).toEqual('String')
    expect(result.video).toEqual('String')
  })

  scenario('updates a recipe', async (scenario: StandardScenario) => {
    const original = await recipe({ id: scenario.recipe.one.id })
    const result = await updateRecipe({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a recipe', async (scenario: StandardScenario) => {
    const original = await deleteRecipe({ id: scenario.recipe.one.id })
    const result = await recipe({ id: original.id })

    expect(result).toEqual(null)
  })
})
