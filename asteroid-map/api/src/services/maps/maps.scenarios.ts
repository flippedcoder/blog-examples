import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MapCreateArgs>({
  map: {
    one: {
      data: {
        name: 'String',
        startDate: '2021-12-03T02:17:46Z',
        endDate: '2021-12-03T02:17:46Z',
        mapUrl: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        startDate: '2021-12-03T02:17:46Z',
        endDate: '2021-12-03T02:17:46Z',
        mapUrl: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
