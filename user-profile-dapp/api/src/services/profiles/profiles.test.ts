import {
  profiles,
  profile,
  createProfile,
  updateProfile,
  deleteProfile,
} from './profiles'
import type { StandardScenario } from './profiles.scenarios'

describe('profiles', () => {
  scenario('returns all profiles', async (scenario: StandardScenario) => {
    const result = await profiles()

    expect(result.length).toEqual(Object.keys(scenario.profile).length)
  })

  scenario('returns a single profile', async (scenario: StandardScenario) => {
    const result = await profile({ id: scenario.profile.one.id })

    expect(result).toEqual(scenario.profile.one)
  })

  scenario('creates a profile', async () => {
    const result = await createProfile({
      input: {
        updatedAt: '2021-10-30T14:16:06Z',
        email: 'String',
        blockchainAddress: 'String',
      },
    })

    expect(result.updatedAt).toEqual('2021-10-30T14:16:06Z')
    expect(result.email).toEqual('String')
    expect(result.blockchainAddress).toEqual('String')
  })

  scenario('updates a profile', async (scenario: StandardScenario) => {
    const original = await profile({ id: scenario.profile.one.id })
    const result = await updateProfile({
      id: original.id,
      input: { updatedAt: '2021-10-31T14:16:06Z' },
    })

    expect(result.updatedAt).toEqual('2021-10-31T14:16:06Z')
  })

  scenario('deletes a profile', async (scenario: StandardScenario) => {
    const original = await deleteProfile({ id: scenario.profile.one.id })
    const result = await profile({ id: original.id })

    expect(result).toEqual(null)
  })
})
