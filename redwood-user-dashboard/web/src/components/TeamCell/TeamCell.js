import Team from 'src/components/Team'

export const QUERY = gql`
  query FIND_TEAM_BY_ID($id: Int!) {
    team: team(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Team not found</div>

export const Success = ({ team }) => {
  return <Team team={team} />
}
