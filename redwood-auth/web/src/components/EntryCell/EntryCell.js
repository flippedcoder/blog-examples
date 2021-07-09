import Entry from 'src/components/Entry'

export const QUERY = gql`
  query FindEntryById($id: Int!) {
    entry: entry(id: $id) {
      id
      purchaseName
      date
      description
      amount
      category
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Entry not found</div>

export const Success = ({ entry }) => {
  return <Entry entry={entry} />
}
