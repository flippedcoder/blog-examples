import Video from 'src/components/Video'

export const QUERY = gql`
  query FindVideoById($id: Int!) {
    video: video(id: $id) {
      id
      name
      duration
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Video not found</div>

export const Success = ({ video }) => {
  return <Video video={video} />
}
