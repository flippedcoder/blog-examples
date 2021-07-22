import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Layout/LayoutsCell'

const DELETE_LAYOUT_MUTATION = gql`
  mutation DeleteLayoutMutation($id: Int!) {
    deleteLayout(id: $id) {
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

const LayoutsList = ({ layouts }) => {
  const [deleteLayout] = useMutation(DELETE_LAYOUT_MUTATION, {
    onCompleted: () => {
      toast.success('Layout deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete layout ' + id + '?')) {
      deleteLayout({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Data location</th>
            <th>Image url</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {layouts.map((layout) => (
            <tr key={layout.id}>
              <td>{truncate(layout.id)}</td>
              <td>{truncate(layout.name)}</td>
              <td>{truncate(layout.dataLocation)}</td>
              <td>{truncate(layout.imageUrl)}</td>
              <td>{truncate(layout.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.layout({ id: layout.id })}
                    title={'Show layout ' + layout.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLayout({ id: layout.id })}
                    title={'Edit layout ' + layout.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete layout ' + layout.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(layout.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LayoutsList
