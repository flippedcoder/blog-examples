import { items } from './items'
import type { StandardScenario } from './items.scenarios'

describe('items', () => {
  scenario('returns all items', async (scenario: StandardScenario) => {
    const result = await items()

    expect(result.length).toEqual(Object.keys(scenario.item).length)
  })
})
