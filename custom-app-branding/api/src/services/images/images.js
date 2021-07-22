import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const images = () => {
  return db.image.findMany()
}

export const Image = {
  user: (_obj, { root }) =>
    db.image.findUnique({ where: { id: root.id } }).user(),
}
