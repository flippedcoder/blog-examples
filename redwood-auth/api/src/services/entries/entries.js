import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const entries = () => {
  return db.entry.findMany()
}

export const entry = ({ id }) => {
  return db.entry.findUnique({
    where: { id },
  })
}

export const createEntry = ({ input }) => {
  return db.entry.create({
    data: input,
  })
}

export const updateEntry = ({ id, input }) => {
  return db.entry.update({
    data: input,
    where: { id },
  })
}

export const deleteEntry = ({ id }) => {
  return db.entry.delete({
    where: { id },
  })
}
