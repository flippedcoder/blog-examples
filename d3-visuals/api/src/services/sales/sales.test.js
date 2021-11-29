import { sales } from './sales'

describe('sales', () => {
  scenario('returns all sales', async (scenario) => {
    const result = await sales()

    expect(result.length).toEqual(Object.keys(scenario.sale).length)
  })
})
