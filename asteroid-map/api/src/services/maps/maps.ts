import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const maps = () => {
  return db.map.findMany()
}

export const map = ({ id }: Prisma.MapWhereUniqueInput) => {
  return db.map.findUnique({
    where: { id },
  })
}

interface CreateMapArgs {
  input: Prisma.MapCreateInput
}

export const createMap = ({ input }: CreateMapArgs) => {
  return db.map.create({
    data: input,
  })
}

interface UpdateMapArgs extends Prisma.MapWhereUniqueInput {
  input: Prisma.MapUpdateInput
}

export const updateMap = ({ id, input }: UpdateMapArgs) => {
  return db.map.update({
    data: input,
    where: { id },
  })
}

export const deleteMap = ({ id }: Prisma.MapWhereUniqueInput) => {
  return db.map.delete({
    where: { id },
  })
}

export const asteroids = ({ input }) => {
  return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${input.startDate.toISOString().split('T')[0]}&end_date=${input.endDate.toISOString().split('T')[0]}&api_key=z7utAxPxjbIn4b1e5DopeTYiinGyaJgofKTHHypX`)
  .then(response => {
    return response.json()
  })
  .then(rawData => {
    const data = rawData.near_earth_objects[input.viewDate.toISOString().split('T')[0]]

    const asteroids = data.map(value => {
      return {
        missDistance: value.close_approach_data[0].miss_distance.kilometers,
        estimatedDiameter: value.estimated_diameter.kilometers.estimated_diameter_max
      }
    })

    console.log(asteroids)
    
    return asteroids
  })
}