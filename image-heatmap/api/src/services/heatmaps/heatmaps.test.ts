import {
  heatmaps,
  heatmap,
  createHeatmap,
  updateHeatmap,
  deleteHeatmap,
} from './heatmaps'
import type { StandardScenario } from './heatmaps.scenarios'

describe('heatmaps', () => {
  scenario('returns all heatmaps', async (scenario: StandardScenario) => {
    const result = await heatmaps()

    expect(result.length).toEqual(Object.keys(scenario.heatmap).length)
  })

  scenario('returns a single heatmap', async (scenario: StandardScenario) => {
    const result = await heatmap({ id: scenario.heatmap.one.id })

    expect(result).toEqual(scenario.heatmap.one)
  })

  scenario('creates a heatmap', async (scenario: StandardScenario) => {
    const result = await createHeatmap({
      input: { imageId: scenario.heatmap.two.imageId },
    })

    expect(result.imageId).toEqual(scenario.heatmap.two.imageId)
  })

  scenario('updates a heatmap', async (scenario: StandardScenario) => {
    const original = await heatmap({ id: scenario.heatmap.one.id })
    const result = await updateHeatmap({
      id: original.id,
      input: { imageId: scenario.heatmap.two.imageId },
    })

    expect(result.imageId).toEqual(scenario.heatmap.two.imageId)
  })

  scenario('deletes a heatmap', async (scenario: StandardScenario) => {
    const original = await deleteHeatmap({ id: scenario.heatmap.one.id })
    const result = await heatmap({ id: original.id })

    expect(result).toEqual(null)
  })
})
