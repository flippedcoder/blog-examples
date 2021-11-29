import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const memes = () => {
  return db.meme.findMany()
}

export const meme = ({ id }: Prisma.MemeWhereUniqueInput) => {
  return db.meme.findUnique({
    where: { id },
  })
}

interface CreateMemeArgs {
  input: Prisma.MemeCreateInput
}

export const createMeme = ({ input }: CreateMemeArgs) => {
  return db.meme.create({
    data: input,
  })
}

interface UpdateMemeArgs extends Prisma.MemeWhereUniqueInput {
  input: Prisma.MemeUpdateInput
}

export const updateMeme = ({ id, input }: UpdateMemeArgs) => {
  return db.meme.update({
    data: input,
    where: { id },
  })
}

export const deleteMeme = ({ id }: Prisma.MemeWhereUniqueInput) => {
  return db.meme.delete({
    where: { id },
  })
}
