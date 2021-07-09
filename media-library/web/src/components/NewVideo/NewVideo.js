import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import VideoForm from 'src/components/VideoForm'

const CREATE_VIDEO_MUTATION = gql`
  mutation CreateVideoMutation($input: CreateVideoInput!) {
    createVideo(input: $input) {
      id
    }
  }
`

const NewVideo = () => {
  const [createVideo, { loading, error }] = useMutation(CREATE_VIDEO_MUTATION, {
    onCompleted: () => {
      toast.success('Video created')
      navigate(routes.videos())
    },
  })

  const onSave = (input) => {
    createVideo({ variables: { input } })
  }

  const successCallBack = (results) => {
    const videoInfo = results.info
    const input = {
      name: videoInfo.original_filename,
      duration: videoInfo.duration || 566.88,
      url: videoInfo.url
    }
    createVideo({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Video</h2>
      </header>
      <div className="rw-segment-main">
        <WidgetLoader />
        <Widget
          sources={['local', 'camera']}
          cloudName={'milecia'}
          uploadPreset={'cwt1qiwn'}
          buttonText={'Open'}
          style={{
            color: 'white',
            border: 'none',
            width: '120px',
            backgroundColor: 'green',
            borderRadius: '4px',
            height: '25px',
          }}
          folder={'test0'}
          onSuccess={successCallBack}
        />
      </div>
    </div>
  )
}

export default NewVideo
