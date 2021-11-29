import { fruits } from './fruits'

describe('fruits', () => {
  scenario('returns all fruits', async (scenario) => {
    const result = await fruits()

    expect(result.length).toEqual(Object.keys(scenario.fruit).length)
  })
})
