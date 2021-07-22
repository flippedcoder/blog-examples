import {
  layouts,
  layout,
  createLayout,
  updateLayout,
  deleteLayout,
} from './layouts'

describe('layouts', () => {
  scenario('returns all layouts', async (scenario) => {
    const result = await layouts()

    expect(result.length).toEqual(Object.keys(scenario.layout).length)
  })

  scenario('returns a single layout', async (scenario) => {
    const result = await layout({ id: scenario.layout.one.id })

    expect(result).toEqual(scenario.layout.one)
  })

  scenario('creates a layout', async (scenario) => {
    const result = await createLayout({
      input: {
        name: 'String',
        dataLocation: 'String',
        imageUrl: 'String',
        userId: scenario.layout.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.dataLocation).toEqual('String')
    expect(result.imageUrl).toEqual('String')
    expect(result.userId).toEqual(scenario.layout.two.userId)
  })

  scenario('updates a layout', async (scenario) => {
    const original = await layout({ id: scenario.layout.one.id })
    const result = await updateLayout({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a layout', async (scenario) => {
    const original = await deleteLayout({ id: scenario.layout.one.id })
    const result = await layout({ id: original.id })

    expect(result).toEqual(null)
  })
})
