import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const setting = (input) => {
  return db.setting.findFirst({
    where: { id: input.id }
  })
}

export const updateSetting = ({ input }) => {
  console.log(`This is the input: + ${input.volume}`)
  return db.setting.update({
    where: { id: input.id },
    data: {
      loop: input.loop,
      videoName: input.videoName,
      controls: input.controls,
      volume: input.volume,
      playbackRate: input.playbackRate,
    },
  })
}
