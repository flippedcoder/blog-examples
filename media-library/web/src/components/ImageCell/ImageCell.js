import Image from 'src/components/Image'

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

export const Success = ({ image }) => {
  return <Image image={image} />
}
