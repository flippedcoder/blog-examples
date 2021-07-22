import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const infos = () => {
  return db.info.findMany()
}

export const Info = {
  user: (_obj, { root }) =>
    db.info.findUnique({ where: { id: root.id } }).user(),
}
