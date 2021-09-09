import { avengers } from './avengers'

describe('avengers', () => {
  scenario('returns all avengers', async (scenario) => {
    const result = await avengers()

    expect(result.length).toEqual(Object.keys(scenario.avenger).length)
  })
})
