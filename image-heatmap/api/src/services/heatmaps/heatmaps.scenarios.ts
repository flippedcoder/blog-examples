import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.HeatmapCreateArgs>({
  heatmap: {
    one: { data: { originalImage: { create: { name: 'String' } } } },
    two: { data: { originalImage: { create: { name: 'String' } } } },
  },
})

export type StandardScenario = typeof standard
