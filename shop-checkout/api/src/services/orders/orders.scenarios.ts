import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OrderCreateArgs>({
  order: {
    one: { createdAt: '2021-09-17T02:06:40Z', total: 5155688.213870646 },
    two: { createdAt: '2021-09-17T02:06:40Z', total: 469080.65312470717 },
  },
})

export type StandardScenario = typeof standard
