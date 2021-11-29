import { memes, meme, createMeme, updateMeme, deleteMeme } from './memes'
import type { StandardScenario } from './memes.scenarios'

describe('memes', () => {
  scenario('returns all memes', async (scenario: StandardScenario) => {
    const result = await memes()

    expect(result.length).toEqual(Object.keys(scenario.meme).length)
  })

  scenario('returns a single meme', async (scenario: StandardScenario) => {
    const result = await meme({ id: scenario.meme.one.id })

    expect(result).toEqual(scenario.meme.one)
  })

  scenario('creates a meme', async () => {
    const result = await createMeme({
      input: { title: 'String', imageUrl: 'String', text: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.imageUrl).toEqual('String')
    expect(result.text).toEqual('String')
  })

  scenario('updates a meme', async (scenario: StandardScenario) => {
    const original = await meme({ id: scenario.meme.one.id })
    const result = await updateMeme({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a meme', async (scenario: StandardScenario) => {
    const original = await deleteMeme({ id: scenario.meme.one.id })
    const result = await meme({ id: original.id })

    expect(result).toEqual(null)
  })
})
