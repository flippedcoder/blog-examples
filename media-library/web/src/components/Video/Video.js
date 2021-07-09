import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/VideosCell'

const DELETE_VIDEO_MUTATION = gql`
  mutation DeleteVideoMutation($id: Int!) {
    deleteVideo(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Video = ({ video }) => {
  const [deleteVideo] = useMutation(DELETE_VIDEO_MUTATION, {
    onCompleted: () => {
      toast.success('Video deleted')
      navigate(routes.videos())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete video ' + id + '?')) {
      deleteVideo({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Video {video.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{video.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{video.name}</td>
            </tr>
            <tr>
              <th>Duration</th>
              <td>{video.duration}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{video.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVideo({ id: video.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(video.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Video
