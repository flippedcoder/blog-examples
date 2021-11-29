import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MixCreateArgs>({
  mix: {
    one: { name: 'String', sample: 'String' },
    two: { name: 'String', sample: 'String' },
  },
})

export type StandardScenario = typeof standard
