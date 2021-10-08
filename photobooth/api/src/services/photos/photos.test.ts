import { photos, photo, createPhoto, updatePhoto, deletePhoto } from './photos'
import type { StandardScenario } from './photos.scenarios'

describe('photos', () => {
  scenario('returns all photos', async (scenario: StandardScenario) => {
    const result = await photos()

    expect(result.length).toEqual(Object.keys(scenario.photo).length)
  })

  scenario('returns a single photo', async (scenario: StandardScenario) => {
    const result = await photo({ id: scenario.photo.one.id })

    expect(result).toEqual(scenario.photo.one)
  })

  scenario('creates a photo', async (scenario: StandardScenario) => {
    const result = await createPhoto({
      input: { url: 'String1565359', userId: scenario.photo.two.userId },
    })

    expect(result.url).toEqual('String1565359')
    expect(result.userId).toEqual(scenario.photo.two.userId)
  })

  scenario('updates a photo', async (scenario: StandardScenario) => {
    const original = await photo({ id: scenario.photo.one.id })
    const result = await updatePhoto({
      id: original.id,
      input: { url: 'String27830072' },
    })

    expect(result.url).toEqual('String27830072')
  })

  scenario('deletes a photo', async (scenario: StandardScenario) => {
    const original = await deletePhoto({ id: scenario.photo.one.id })
    const result = await photo({ id: original.id })

    expect(result).toEqual(null)
  })
})
