import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  info: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).info(),
  image: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).image(),
  layout: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).layout(),
}
