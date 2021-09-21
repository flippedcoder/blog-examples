import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ItemCreateArgs>({
  item: {
    one: { name: 'String', price: 6278861.369358591 },
    two: { name: 'String', price: 4016576.7839238774 },
  },
})

export type StandardScenario = typeof standard
