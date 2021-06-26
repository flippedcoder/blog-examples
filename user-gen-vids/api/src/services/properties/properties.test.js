import { properties } from './properties'

describe('properties', () => {
  scenario('returns all properties', async (scenario) => {
    const result = await properties()

    expect(result.length).toEqual(Object.keys(scenario.property).length)
  })
})
