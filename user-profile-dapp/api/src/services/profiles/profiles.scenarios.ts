import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProfileCreateArgs>({
  profile: {
    one: {
      updatedAt: '2021-10-30T14:16:06Z',
      email: 'String',
      blockchainAddress: 'String',
    },
    two: {
      updatedAt: '2021-10-30T14:16:06Z',
      email: 'String',
      blockchainAddress: 'String',
    },
  },
})

export type StandardScenario = typeof standard
