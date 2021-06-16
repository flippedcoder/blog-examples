import { Link, routes } from '@redwoodjs/router'

import Alerts from 'src/components/Alerts'

export const QUERY = gql`
  query ALERTS {
    alerts {
      id
      name
      priority
      teamId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No alerts yet. '}
      <Link to={routes.newAlert()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ alerts }) => {
  return <Alerts alerts={alerts} />
}
