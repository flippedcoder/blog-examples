import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import VideoForm from 'src/components/VideoForm'

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
const UPDATE_VIDEO_MUTATION = gql`
  mutation UpdateVideoMutation($id: Int!, $input: UpdateVideoInput!) {
    updateVideo(id: $id, input: $input) {
      id
      name
      duration
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ video }) => {
  const [updateVideo, { loading, error }] = useMutation(UPDATE_VIDEO_MUTATION, {
    onCompleted: () => {
      toast.success('Video updated')
      navigate(routes.videos())
    },
  })

  const onSave = (input, id) => {
    updateVideo({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Video {video.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VideoForm
          video={video}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
