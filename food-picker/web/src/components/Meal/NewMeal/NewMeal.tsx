import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MealForm from 'src/components/Meal/MealForm'

const CREATE_MEAL_MUTATION = gql`
  mutation CreateMealMutation($input: CreateMealInput!) {
    createMeal(input: $input) {
      id
    }
  }
`

const NewMeal = () => {
  const [createMeal, { loading, error }] = useMutation(CREATE_MEAL_MUTATION, {
    onCompleted: () => {
      toast.success('Meal created')
      navigate(routes.meals())
    },
  })

  const onSave = (input) => {
    createMeal({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Meal</h2>
      </header>
      <div className="rw-segment-main">
        <MealForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMeal
