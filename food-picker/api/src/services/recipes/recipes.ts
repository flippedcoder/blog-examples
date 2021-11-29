import type { Prisma } from '@prisma/client'
import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const recipes = () => {
  return db.recipe.findMany()
}

export const recipe = ({ id }: Prisma.RecipeWhereUniqueInput) => {
  return db.recipe.findUnique({
    where: { id },
  })
}

interface CreateRecipeArgs {
  input: Prisma.RecipeCreateInput
}

export const createRecipe = ({ input }: CreateRecipeArgs) => {
  return db.recipe.create({
    data: input,
  })
}

interface UpdateRecipeArgs extends Prisma.RecipeWhereUniqueInput {
  input: Prisma.RecipeUpdateInput
}

export const updateRecipe = ({ id, input }: UpdateRecipeArgs) => {
  return db.recipe.update({
    data: input,
    where: { id },
  })
}

export const deleteRecipe = ({ id }: Prisma.RecipeWhereUniqueInput) => {
  return db.recipe.delete({
    where: { id },
  })
}
