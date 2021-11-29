import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const mixes = () => {
  return db.mix.findMany()
}

export const mix = ({ id }: Prisma.MixWhereUniqueInput) => {
  return db.mix.findUnique({
    where: { id },
  })
}

interface CreateMixArgs {
  input: Prisma.MixCreateInput
}

export const createMix = ({ input }: CreateMixArgs) => {
  return db.mix.create({
    data: input,
  })
}

interface UpdateMixArgs extends Prisma.MixWhereUniqueInput {
  input: Prisma.MixUpdateInput
}

export const updateMix = ({ id, input }: UpdateMixArgs) => {
  return db.mix.update({
    data: input,
    where: { id },
  })
}

export const deleteMix = ({ id }: Prisma.MixWhereUniqueInput) => {
  return db.mix.delete({
    where: { id },
  })
}
