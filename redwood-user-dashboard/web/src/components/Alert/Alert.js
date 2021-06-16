import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/AlertsCell'

const DELETE_ALERT_MUTATION = gql`
  mutation DeleteAlertMutation($id: Int!) {
    deleteAlert(id: $id) {
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

const Alert = ({ alert }) => {
  const [deleteAlert] = useMutation(DELETE_ALERT_MUTATION, {
    onCompleted: () => {
      toast.success('Alert deleted')
      navigate(routes.alerts())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete alert ' + id + '?')) {
      deleteAlert({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Alert {alert.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{alert.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{alert.name}</td>
            </tr>
            <tr>
              <th>Priority</th>
              <td>{alert.priority}</td>
            </tr>
            <tr>
              <th>Team id</th>
              <td>{alert.teamId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAlert({ id: alert.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(alert.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Alert
