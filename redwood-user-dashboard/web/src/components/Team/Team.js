import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/TeamsCell'

const DELETE_TEAM_MUTATION = gql`
  mutation DeleteTeamMutation($id: Int!) {
    deleteTeam(id: $id) {
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

const Team = ({ team }) => {
  const [deleteTeam] = useMutation(DELETE_TEAM_MUTATION, {
    onCompleted: () => {
      toast.success('Team deleted')
      navigate(routes.teams())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete team ' + id + '?')) {
      deleteTeam({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Team {team.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{team.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{team.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTeam({ id: team.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(team.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Team
