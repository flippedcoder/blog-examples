import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const layouts = () => {
  return db.layout.findMany()
}

export const layout = ({ id }) => {
  return db.layout.findUnique({
    where: { id },
  })
}

export const createLayout = ({ input }) => {
  return db.layout.create({
    data: input,
  })
}

export const updateLayout = ({ id, input }) => {
  return db.layout.update({
    data: input,
    where: { id },
  })
}

export const deleteLayout = ({ id }) => {
  return db.layout.delete({
    where: { id },
  })
}

export const Layout = {
  user: (_obj, { root }) =>
    db.layout.findUnique({ where: { id: root.id } }).user(),
}
