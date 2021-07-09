import { Link, routes } from '@redwoodjs/router'

import Videos from 'src/components/Videos'

export const QUERY = gql`
  query VIDEOS {
    videos {
      id
      name
      duration
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No videos yet. '}
      <Link to={routes.newVideo()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ videos }) => {
  return <Videos videos={videos} />
}
