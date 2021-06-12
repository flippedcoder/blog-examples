import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const teams = () => {
  return db.team.findMany()
}

export const team = ({ id }) => {
  return db.team.findUnique({
    where: { id },
  })
}

export const createTeam = ({ input }) => {
  return db.team.create({
    data: input,
  })
}

export const updateTeam = ({ id, input }) => {
  return db.team.update({
    data: input,
    where: { id },
  })
}

export const deleteTeam = ({ id }) => {
  return db.team.delete({
    where: { id },
  })
}

export const Team = {
  User: (_obj, { root }) =>
    db.team.findUnique({ where: { id: root.id } }).User(),
}
