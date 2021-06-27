import { worlds } from './worlds'

describe('worlds', () => {
  scenario('returns all worlds', async (scenario) => {
    const result = await worlds()

    expect(result.length).toEqual(Object.keys(scenario.world).length)
  })
})
