import {
  snapshots,
  snapshot,
  createSnapshot,
  updateSnapshot,
  deleteSnapshot,
} from './snapshots'

describe('snapshots', () => {
  scenario('returns all snapshots', async (scenario) => {
    const result = await snapshots()

    expect(result.length).toEqual(Object.keys(scenario.snapshot).length)
  })

  scenario('returns a single snapshot', async (scenario) => {
    const result = await snapshot({ id: scenario.snapshot.one.id })

    expect(result).toEqual(scenario.snapshot.one)
  })

  scenario('creates a snapshot', async () => {
    const result = await createSnapshot({
      input: {
        name: 'String',
        xPosition: 4914801.928823289,
        yPosition: 9988428.487140648,
        imageUrl: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.xPosition).toEqual(4914801.928823289)
    expect(result.yPosition).toEqual(9988428.487140648)
    expect(result.imageUrl).toEqual('String')
  })

  scenario('updates a snapshot', async (scenario) => {
    const original = await snapshot({ id: scenario.snapshot.one.id })
    const result = await updateSnapshot({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a snapshot', async (scenario) => {
    const original = await deleteSnapshot({ id: scenario.snapshot.one.id })
    const result = await snapshot({ id: original.id })

    expect(result).toEqual(null)
  })
})
