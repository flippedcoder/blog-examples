import { db } from 'src/lib/db'

export const snapshots = () => {
  return db.snapshot.findMany()
}

export const snapshot = ({ id }) => {
  return db.snapshot.findUnique({
    where: { id },
  })
}

export const createSnapshot = ({ input }) => {
  return db.snapshot.create({
    data: input,
  })
}

export const updateSnapshot = ({ id, input }) => {
  return db.snapshot.update({
    data: input,
    where: { id },
  })
}

export const deleteSnapshot = ({ id }) => {
  return db.snapshot.delete({
    where: { id },
  })
}
