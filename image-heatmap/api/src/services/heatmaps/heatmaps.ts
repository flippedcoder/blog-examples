import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const heatmaps = () => {
  return db.heatmap.findMany()
}

export const heatmap = ({ id }: Prisma.HeatmapWhereUniqueInput) => {
  return db.heatmap.findUnique({
    where: { id },
  })
}

interface CreateHeatmapArgs {
  input: Prisma.HeatmapCreateInput
}

export const createHeatmap = ({ input }: CreateHeatmapArgs) => {
  return db.heatmap.create({
    data: input,
  })
}

interface UpdateHeatmapArgs extends Prisma.HeatmapWhereUniqueInput {
  input: Prisma.HeatmapUpdateInput
}

export const updateHeatmap = ({ id, input }: UpdateHeatmapArgs) => {
  return db.heatmap.update({
    data: input,
    where: { id },
  })
}

export const deleteHeatmap = ({ id }: Prisma.HeatmapWhereUniqueInput) => {
  return db.heatmap.delete({
    where: { id },
  })
}

export const Heatmap = {
  originalImage: (_obj, { root }: ResolverArgs<ReturnType<typeof heatmap>>) =>
    db.heatmap.findUnique({ where: { id: root.id } }).originalImage(),
}
