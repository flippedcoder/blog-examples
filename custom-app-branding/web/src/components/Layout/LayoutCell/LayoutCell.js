import Layout from 'src/components/Layout/Layout'

export const QUERY = gql`
  query FindLayoutById($id: Int!) {
    layout: layout(id: $id) {
      id
      name
      dataLocation
      imageUrl
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Layout not found</div>

export const Success = ({ layout }) => {
  return <Layout layout={layout} />
}
