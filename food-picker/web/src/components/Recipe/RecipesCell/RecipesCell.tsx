import type { FindRecipes } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Recipes from 'src/components/Recipe/Recipes'

export const QUERY = gql`
  query FindRecipes {
    recipes {
      id
      title
      details
      video
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No recipes yet. '}
      <Link
        to={routes.newRecipe()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ recipes }: CellSuccessProps<FindRecipes>) => {
  return <Recipes recipes={recipes} />
}
