import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/EntriesCell'

const DELETE_ENTRY_MUTATION = gql`
  mutation DeleteEntryMutation($id: Int!) {
    deleteEntry(id: $id) {
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

const EntriesList = ({ entries }) => {
  const [deleteEntry] = useMutation(DELETE_ENTRY_MUTATION, {
    onCompleted: () => {
      toast.success('Entry deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete entry ' + id + '?')) {
      deleteEntry({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Purchase name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{truncate(entry.id)}</td>
              <td>{truncate(entry.purchaseName)}</td>
              <td>{timeTag(entry.date)}</td>
              <td>{truncate(entry.description)}</td>
              <td>{truncate(entry.amount)}</td>
              <td>{truncate(entry.category)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.entry({ id: entry.id })}
                    title={'Show entry ' + entry.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEntry({ id: entry.id })}
                    title={'Edit entry ' + entry.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete entry ' + entry.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(entry.id)}
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

export default EntriesList
