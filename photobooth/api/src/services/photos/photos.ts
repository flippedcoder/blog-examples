import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const photos = () => {
  return db.photo.findMany()
}

export const photo = ({ id }: Prisma.PhotoWhereUniqueInput) => {
  return db.photo.findUnique({
    where: { id },
  })
}

interface CreatePhotoArgs {
  input: Prisma.PhotoCreateInput
}

export const createPhoto = ({ input }: CreatePhotoArgs) => {
  return db.photo.create({
    data: input,
  })
}

interface UpdatePhotoArgs extends Prisma.PhotoWhereUniqueInput {
  input: Prisma.PhotoUpdateInput
}

export const updatePhoto = ({ id, input }: UpdatePhotoArgs) => {
  return db.photo.update({
    data: input,
    where: { id },
  })
}

export const deletePhoto = ({ id }: Prisma.PhotoWhereUniqueInput) => {
  return db.photo.delete({
    where: { id },
  })
}

export const Photo = {
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof photo>>) =>
    db.photo.findUnique({ where: { id: root.id } }).user(),
}
