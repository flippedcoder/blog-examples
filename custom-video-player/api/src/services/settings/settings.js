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

export const createSetting = ({ input }) => {
  return db.setting.create({ data: input })
}

export const updateSetting = ({ input }) => {
  console.log(`This is the input: + ${input.id}`)
  return db.setting.update({
    where: { id: input.id },
    data: {
      loop: input.loop,
      videoName: input.videoName,
    },
  })
}
