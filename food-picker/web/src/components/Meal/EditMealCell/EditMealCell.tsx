import type { EditMealById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MealForm from 'src/components/Meal/MealForm'

export const QUERY = gql`
  query EditMealById($id: String!) {
    meal: meal(id: $id) {
      id
      title
      recipe
      video
    }
  }
`
const UPDATE_MEAL_MUTATION = gql`
  mutation UpdateMealMutation($id: String!, $input: UpdateMealInput!) {
    updateMeal(id: $id, input: $input) {
      id
      title
      recipe
      video
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ meal }: CellSuccessProps<EditMealById>) => {
  const [updateMeal, { loading, error }] = useMutation(UPDATE_MEAL_MUTATION, {
    onCompleted: () => {
      toast.success('Meal updated')
      navigate(routes.meals())
    },
  })

  const onSave = (input, id) => {
    updateMeal({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Meal {meal.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MealForm meal={meal} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
