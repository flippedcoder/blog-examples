import { Link, routes } from '@redwoodjs/router'

import Teams from 'src/components/Teams'

export const QUERY = gql`
  query TEAMS {
    teams {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No teams yet. '}
      <Link to={routes.newTeam()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ teams }) => {
  return <Teams teams={teams} />
}
