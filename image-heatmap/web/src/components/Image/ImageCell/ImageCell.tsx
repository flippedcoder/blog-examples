import type { FindImageById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Image from 'src/components/Image/Image'

export const QUERY = gql`
  query FindImageById($id: Int!) {
    image: image(id: $id) {
      id
      name
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Image not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ image }: CellSuccessProps<FindImageById>) => {
  return <Image image={image} />
}
