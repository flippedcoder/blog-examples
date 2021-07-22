import { Link, routes } from '@redwoodjs/router'

import Layouts from 'src/components/Layout/Layouts'

export const QUERY = gql`
  query LAYOUTS {
    layouts {
      id
      name
      dataLocation
      imageUrl
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No layouts yet. '}
      <Link to={routes.newLayout()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ layouts }) => {
  return <Layouts layouts={layouts} />
}
