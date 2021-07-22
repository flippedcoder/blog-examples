import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_LAYOUT_MUTATION = gql`
  mutation DeleteLayoutMutation($id: Int!) {
    deleteLayout(id: $id) {
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

const Layout = ({ layout }) => {
  const [deleteLayout] = useMutation(DELETE_LAYOUT_MUTATION, {
    onCompleted: () => {
      toast.success('Layout deleted')
      navigate(routes.layouts())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete layout ' + id + '?')) {
      deleteLayout({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Layout {layout.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{layout.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{layout.name}</td>
            </tr>
            <tr>
              <th>Data location</th>
              <td>{layout.dataLocation}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{layout.imageUrl}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{layout.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLayout({ id: layout.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(layout.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Layout
