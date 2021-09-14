import { meals, meal, createMeal, updateMeal, deleteMeal } from './meals'
import type { StandardScenario } from './meals.scenarios'

describe('meals', () => {
  scenario('returns all meals', async (scenario: StandardScenario) => {
    const result = await meals()

    expect(result.length).toEqual(Object.keys(scenario.meal).length)
  })

  scenario('returns a single meal', async (scenario: StandardScenario) => {
    const result = await meal({ id: scenario.meal.one.id })

    expect(result).toEqual(scenario.meal.one)
  })

  scenario('creates a meal', async () => {
    const result = await createMeal({
      input: { title: 'String', recipe: 'String', video: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.recipe).toEqual('String')
    expect(result.video).toEqual('String')
  })

  scenario('updates a meal', async (scenario: StandardScenario) => {
    const original = await meal({ id: scenario.meal.one.id })
    const result = await updateMeal({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a meal', async (scenario: StandardScenario) => {
    const original = await deleteMeal({ id: scenario.meal.one.id })
    const result = await meal({ id: original.id })

    expect(result).toEqual(null)
  })
})
