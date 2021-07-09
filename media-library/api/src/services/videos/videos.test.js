import { videos, video, createVideo, updateVideo, deleteVideo } from './videos'

describe('videos', () => {
  scenario('returns all videos', async (scenario) => {
    const result = await videos()

    expect(result.length).toEqual(Object.keys(scenario.video).length)
  })

  scenario('returns a single video', async (scenario) => {
    const result = await video({ id: scenario.video.one.id })

    expect(result).toEqual(scenario.video.one)
  })

  scenario('creates a video', async () => {
    const result = await createVideo({
      input: { name: 'String', url: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.duration).toEqual()
    expect(result.url).toEqual('String')
  })

  scenario('updates a video', async (scenario) => {
    const original = await video({ id: scenario.video.one.id })
    const result = await updateVideo({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a video', async (scenario) => {
    const original = await deleteVideo({ id: scenario.video.one.id })
    const result = await video({ id: original.id })

    expect(result).toEqual(null)
  })
})
