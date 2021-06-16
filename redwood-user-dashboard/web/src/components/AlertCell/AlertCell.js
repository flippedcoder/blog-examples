import Alert from 'src/components/Alert'

export const QUERY = gql`
  query FIND_ALERT_BY_ID($id: Int!) {
    alert: alert(id: $id) {
      id
      name
      priority
      teamId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Alert not found</div>

export const Success = ({ alert }) => {
  return <Alert alert={alert} />
}
