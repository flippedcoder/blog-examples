import { Link, routes } from '@redwoodjs/router'

import Images from 'src/components/Image/Images'

export const QUERY = gql`
  query IMAGES {
    images {
      id
      name
      url
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No images yet. '}
      <Link to={routes.newImage()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ images }) => {
  return <Images images={images} />
}
