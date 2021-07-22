import { infos } from './infos'

describe('infos', () => {
  scenario('returns all infos', async (scenario) => {
    const result = await infos()

    expect(result.length).toEqual(Object.keys(scenario.info).length)
  })
})
