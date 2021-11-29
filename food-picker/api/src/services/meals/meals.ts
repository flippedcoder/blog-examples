import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const meals = () => {
  return db.meal.findMany()
}

export const meal = ({ id }: Prisma.MealWhereUniqueInput) => {
  return db.meal.findUnique({
    where: { id },
  })
}

interface CreateMealArgs {
  input: Prisma.MealCreateInput
}

export const createMeal = ({ input }: CreateMealArgs) => {
  return db.meal.create({
    data: input,
  })
}

interface UpdateMealArgs extends Prisma.MealWhereUniqueInput {
  input: Prisma.MealUpdateInput
}

export const updateMeal = ({ id, input }: UpdateMealArgs) => {
  return db.meal.update({
    data: input,
    where: { id },
  })
}

export const deleteMeal = ({ id }: Prisma.MealWhereUniqueInput) => {
  return db.meal.delete({
    where: { id },
  })
}
