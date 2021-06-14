import { settings } from './settings'

describe('settings', () => {
  scenario('returns all settings', async (scenario) => {
    const result = await settings()

    expect(result.length).toEqual(Object.keys(scenario.setting).length)
  })
})
