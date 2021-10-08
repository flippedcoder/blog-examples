import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PhotoCreateArgs>({
  photo: {
    one: {
      data: { url: 'String6335500', user: { create: { name: 'String' } } },
    },
    two: {
      data: { url: 'String9835464', user: { create: { name: 'String' } } },
    },
  },
})

export type StandardScenario = typeof standard
