import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const properties = () => {
  return db.property.findMany()
}

export const createProperty = ({ input }) => {
  return db.property.create({ data: input })
}
