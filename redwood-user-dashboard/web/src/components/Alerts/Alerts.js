import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/AlertsCell'

const DELETE_ALERT_MUTATION = gql`
  mutation DeleteAlertMutation($id: Int!) {
    deleteAlert(id: $id) {
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

const AlertsList = ({ alerts }) => {
  const [deleteAlert] = useMutation(DELETE_ALERT_MUTATION, {
    onCompleted: () => {
      toast.success('Alert deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete alert ' + id + '?')) {
      deleteAlert({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Priority</th>
            <th>Team id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{truncate(alert.id)}</td>
              <td>{truncate(alert.name)}</td>
              <td>{truncate(alert.priority)}</td>
              <td>{truncate(alert.teamId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.alert({ id: alert.id })}
                    title={'Show alert ' + alert.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAlert({ id: alert.id })}
                    title={'Edit alert ' + alert.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete alert ' + alert.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(alert.id)}
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

export default AlertsList
