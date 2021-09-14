import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MealCreateArgs>({
  meal: {
    one: { title: 'String', recipe: 'String', video: 'String' },
    two: { title: 'String', recipe: 'String', video: 'String' },
  },
})

export type StandardScenario = typeof standard
