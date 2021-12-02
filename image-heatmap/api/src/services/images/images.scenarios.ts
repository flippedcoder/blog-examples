import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ImageCreateArgs>({
  image: {
    one: { data: { name: 'String', url: 'String' } },
    two: { data: { name: 'String', url: 'String' } },
  },
})

export type StandardScenario = typeof standard
