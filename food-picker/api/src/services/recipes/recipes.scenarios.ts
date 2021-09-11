import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    one: { title: 'String', details: 'String', video: 'String' },
    two: { title: 'String', details: 'String', video: 'String' },
  },
})

export type StandardScenario = typeof standard
