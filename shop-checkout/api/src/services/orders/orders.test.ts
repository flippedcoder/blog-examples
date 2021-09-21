import { orders } from './orders'
import type { StandardScenario } from './orders.scenarios'

describe('orders', () => {
  scenario('returns all orders', async (scenario: StandardScenario) => {
    const result = await orders()

    expect(result.length).toEqual(Object.keys(scenario.order).length)
  })
})
