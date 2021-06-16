import { alerts, alert, createAlert, updateAlert, deleteAlert } from './alerts'

describe('alerts', () => {
  scenario('returns all alerts', async (scenario) => {
    const result = await alerts()

    expect(result.length).toEqual(Object.keys(scenario.alert).length)
  })

  scenario('returns a single alert', async (scenario) => {
    const result = await alert({ id: scenario.alert.one.id })

    expect(result).toEqual(scenario.alert.one)
  })

  scenario('creates a alert', async () => {
    const result = await createAlert({
      input: {
        name: 'String',
        priority: 'String',
        teamId: 'scenario.alert.two.teamId',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.priority).toEqual('String')
    expect(result.teamId).toEqual('scenario.alert.two.teamId')
  })

  scenario('updates a alert', async (scenario) => {
    const original = await alert({ id: scenario.alert.one.id })
    const result = await updateAlert({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a alert', async (scenario) => {
    const original = await deleteAlert({ id: scenario.alert.one.id })
    const result = await alert({ id: original.id })

    expect(result).toEqual(null)
  })
})
