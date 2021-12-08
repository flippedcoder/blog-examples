import { maps, map, createMap, updateMap, deleteMap } from './maps'
import type { StandardScenario } from './maps.scenarios'

describe('maps', () => {
  scenario('returns all maps', async (scenario: StandardScenario) => {
    const result = await maps()

    expect(result.length).toEqual(Object.keys(scenario.map).length)
  })

  scenario('returns a single map', async (scenario: StandardScenario) => {
    const result = await map({ id: scenario.map.one.id })

    expect(result).toEqual(scenario.map.one)
  })

  scenario('creates a map', async () => {
    const result = await createMap({
      input: {
        name: 'String',
        startDate: '2021-12-03T02:17:46Z',
        endDate: '2021-12-03T02:17:46Z',
        mapUrl: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.startDate).toEqual('2021-12-03T02:17:46Z')
    expect(result.endDate).toEqual('2021-12-03T02:17:46Z')
    expect(result.mapUrl).toEqual('String')
  })

  scenario('updates a map', async (scenario: StandardScenario) => {
    const original = await map({ id: scenario.map.one.id })
    const result = await updateMap({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a map', async (scenario: StandardScenario) => {
    const original = await deleteMap({ id: scenario.map.one.id })
    const result = await map({ id: original.id })

    expect(result).toEqual(null)
  })
})
