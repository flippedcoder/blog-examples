import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const videos = () => {
  return db.video.findMany()
}

export const video = ({ id }) => {
  return db.video.findUnique({
    where: { id },
  })
}

export const createVideo = ({ input }) => {
  return db.video.create({
    data: input,
  })
}

export const updateVideo = ({ id, input }) => {
  return db.video.update({
    data: input,
    where: { id },
  })
}

export const deleteVideo = ({ id }) => {
  return db.video.delete({
    where: { id },
  })
}

export const Video = {
  user: (_obj, { root }) =>
    db.video.findUnique({ where: { id: root.id } }).user(),
}
