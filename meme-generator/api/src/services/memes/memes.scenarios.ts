import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MemeCreateArgs>({
  meme: {
    one: { title: 'String', imageUrl: 'String', textTop: 'String', textBottom: 'String' },
    two: { title: 'String', imageUrl: 'String', textTop: 'String', textBottom: 'String' },
  },
})

export type StandardScenario = typeof standard
