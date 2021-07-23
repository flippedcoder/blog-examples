import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const captures = () => {
  return db.capture.findMany()
}

export const createCapture = ({ input }) => {
  return db.capture.create({
    data: input,
  })
}
