import { captures } from './captures'

describe('captures', () => {
  scenario('returns all captures', async (scenario) => {
    const result = await captures()

    expect(result.length).toEqual(Object.keys(scenario.capture).length)
  })
})
