import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const images = () => {
  return db.image.findMany()
}

export const image = ({ id }) => {
  return db.image.findUnique({
    where: { id },
  })
}

export const createImage = ({ input }) => {
  return db.image.create({
    data: input,
  })
}

export const updateImage = ({ id, input }) => {
  return db.image.update({
    data: input,
    where: { id },
  })
}

export const deleteImage = ({ id }) => {
  return db.image.delete({
    where: { id },
  })
}

export const Image = {
  User: (_obj, { root }) =>
    db.image.findUnique({ where: { id: root.id } }).User(),
}
