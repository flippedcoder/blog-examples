import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const alerts = () => {
  return db.alert.findMany()
}

export const alert = ({ id }) => {
  return db.alert.findUnique({
    where: { id },
  })
}

export const createAlert = ({ input }) => {
  return db.alert.create({
    data: input,
  })
}

export const updateAlert = ({ id, input }) => {
  return db.alert.update({
    data: input,
    where: { id },
  })
}

export const deleteAlert = ({ id }) => {
  return db.alert.delete({
    where: { id },
  })
}

export const Alert = {
  team: (_obj, { root }) =>
    db.alert.findUnique({ where: { id: root.id } }).team(),
}
