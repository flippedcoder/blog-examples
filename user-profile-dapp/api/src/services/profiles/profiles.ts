import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const profiles = () => {
  return db.profile.findMany()
}

export const profile = ({ id }: Prisma.ProfileWhereUniqueInput) => {
  return db.profile.findUnique({
    where: { id },
  })
}

interface CreateProfileArgs {
  input: Prisma.ProfileCreateInput
}

export const createProfile = ({ input }: CreateProfileArgs) => {
  return db.profile.create({
    data: input,
  })
}

interface UpdateProfileArgs extends Prisma.ProfileWhereUniqueInput {
  input: Prisma.ProfileUpdateInput
}

export const updateProfile = ({ id, input }: UpdateProfileArgs) => {
  return db.profile.update({
    data: input,
    where: { id },
  })
}

export const deleteProfile = ({ id }: Prisma.ProfileWhereUniqueInput) => {
  return db.profile.delete({
    where: { id },
  })
}
