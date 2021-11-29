import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Recipe/RecipesCell'

const DELETE_RECIPE_MUTATION = gql`
  mutation DeleteRecipeMutation($id: String!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const RecipesList = ({ recipes }) => {
  const [deleteRecipe] = useMutation(DELETE_RECIPE_MUTATION, {
    onCompleted: () => {
      toast.success('Recipe deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete recipe ' + id + '?')) {
      deleteRecipe({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Details</th>
            <th>Video</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{truncate(recipe.id)}</td>
              <td>{truncate(recipe.title)}</td>
              <td>{truncate(recipe.details)}</td>
              <td>{truncate(recipe.video)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.recipe({ id: recipe.id })}
                    title={'Show recipe ' + recipe.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRecipe({ id: recipe.id })}
                    title={'Edit recipe ' + recipe.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete recipe ' + recipe.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(recipe.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecipesList
