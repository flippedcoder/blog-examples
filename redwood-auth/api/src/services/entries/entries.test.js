import {
  entries,
  entry,
  createEntry,
  updateEntry,
  deleteEntry,
} from './entries'

describe('entries', () => {
  scenario('returns all entries', async (scenario) => {
    const result = await entries()

    expect(result.length).toEqual(Object.keys(scenario.entry).length)
  })

  scenario('returns a single entry', async (scenario) => {
    const result = await entry({ id: scenario.entry.one.id })

    expect(result).toEqual(scenario.entry.one)
  })

  scenario('creates a entry', async () => {
    const result = await createEntry({
      input: {
        purchaseName: 'String',
        description: 'String',
        category: 'String',
      },
    })

    expect(result.purchaseName).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.amount).toEqual()
    expect(result.category).toEqual('String')
  })

  scenario('updates a entry', async (scenario) => {
    const original = await entry({ id: scenario.entry.one.id })
    const result = await updateEntry({
      id: original.id,
      input: { purchaseName: 'String2' },
    })

    expect(result.purchaseName).toEqual('String2')
  })

  scenario('deletes a entry', async (scenario) => {
    const original = await deleteEntry({ id: scenario.entry.one.id })
    const result = await entry({ id: original.id })

    expect(result).toEqual(null)
  })
})
