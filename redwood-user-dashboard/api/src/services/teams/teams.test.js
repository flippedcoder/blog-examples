import { teams, team, createTeam, updateTeam, deleteTeam } from './teams'

describe('teams', () => {
  scenario('returns all teams', async (scenario) => {
    const result = await teams()

    expect(result.length).toEqual(Object.keys(scenario.team).length)
  })

  scenario('returns a single team', async (scenario) => {
    const result = await team({ id: scenario.team.one.id })

    expect(result).toEqual(scenario.team.one)
  })

  scenario('creates a team', async () => {
    const result = await createTeam({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a team', async (scenario) => {
    const original = await team({ id: scenario.team.one.id })
    const result = await updateTeam({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a team', async (scenario) => {
    const original = await deleteTeam({ id: scenario.team.one.id })
    const result = await team({ id: original.id })

    expect(result).toEqual(null)
  })
})
