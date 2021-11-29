import { mixes, mix, createMix, updateMix, deleteMix } from './mixes'
import type { StandardScenario } from './mixes.scenarios'

describe('mixes', () => {
  scenario('returns all mixes', async (scenario: StandardScenario) => {
    const result = await mixes()

    expect(result.length).toEqual(Object.keys(scenario.mix).length)
  })

  scenario('returns a single mix', async (scenario: StandardScenario) => {
    const result = await mix({ id: scenario.mix.one.id })

    expect(result).toEqual(scenario.mix.one)
  })

  scenario('creates a mix', async () => {
    const result = await createMix({
      input: { name: 'String', sample: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.sample).toEqual('String')
  })

  scenario('updates a mix', async (scenario: StandardScenario) => {
    const original = await mix({ id: scenario.mix.one.id })
    const result = await updateMix({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a mix', async (scenario: StandardScenario) => {
    const original = await deleteMix({ id: scenario.mix.one.id })
    const result = await mix({ id: original.id })

    expect(result).toEqual(null)
  })
})
