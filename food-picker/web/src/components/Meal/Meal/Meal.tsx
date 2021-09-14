import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MEAL_MUTATION = gql`
  mutation DeleteMealMutation($id: String!) {
    deleteMeal(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Meal = ({ meal }) => {
  const [deleteMeal] = useMutation(DELETE_MEAL_MUTATION, {
    onCompleted: () => {
      toast.success('Meal deleted')
      navigate(routes.meals())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete meal ' + id + '?')) {
      deleteMeal({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Meal {meal.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{meal.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{meal.title}</td>
            </tr><tr>
              <th>Recipe</th>
              <td>{meal.recipe}</td>
            </tr><tr>
              <th>Video</th>
              <td>{meal.video}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMeal({ id: meal.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(meal.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Meal
