import { Form, Label, TextField, NumberField, Submit } from '@redwoodjs/forms'
import { useMutation, useQuery } from '@redwoodjs/web'

const HomePage = () => {
  const { loading, data } = useQuery(PROPERTIES)
  const [createProperty] = useMutation(CREATE_PROPERTY)

  if (loading) {
    return <div>Loading..</div>
  }

  const properties = data.properties[data.properties.length - 1]

  const onSubmit = (data) => {
    const videos = [data.video1, data.video2, data.video3]
    createProperty({
      variables: {
        width: data.width,
        height: data.height,
        videoDuration: data.videoDuration,
        slideDuration: data.slideDuration,
        transitionDuration: data.transitionDuration,
        videos: videos,
      },
    })
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Label name="video1">First video</Label>
        <TextField name="video1" />
        <Label name="video2">Second video</Label>
        <TextField name="video2" />
        <Label name="video3">Third video</Label>
        <TextField name="video3" />
        <Label name="width">Video width (px)</Label>
        <NumberField name="width" max={500} />
        <Label name="height">Video height (px)</Label>
        <NumberField name="height" max={500} />
        <Label name="videoDuration">Video duration (ms)</Label>
        <NumberField name="videoDuration" max={11500} />
        <Label name="slideDuration">Slide duration (ms)</Label>
        <NumberField name="slideDuration" max={5500} />
        <Label name="transitionDuration">Transition duration (ms)</Label>
        <NumberField name="transitionDuration" max={5000} />
        <Submit>Save</Submit>
      </Form>
      <video controls>
        <source
          src={`https://res.cloudinary.com/milecia/video/upload/fn_render:w_${
            properties.width
          };h_${properties.height};du_${properties.videoDuration};vars_(sdur_${
            properties.slideDuration
          };tdur_${
            properties.transitionDuration
          };transition_s:circlecrop;slides_(${properties.videos
            .map((mediaDoc) => `(media_i:${mediaDoc})`)
            .join(';')}))/f_auto,q_auto/slideshow_hlhpzw.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </>
  )
}

const PROPERTIES = gql`
  query Properties {
    properties {
      id
      width
      height
      videoDuration
      slideDuration
      transitionDuration
      videos
    }
  }
`

const CREATE_PROPERTY = gql`
  mutation CreateProperty(
    $width: Int!
    $height: Int!
    $videoDuration: Int!
    $slideDuration: Int!
    $transitionDuration: Int!
    $videos: [String]!
  ) {
    createProperty(
      input: {
        width: $width
        height: $height
        videoDuration: $videoDuration
        slideDuration: $slideDuration
        transitionDuration: $transitionDuration
        videos: $videos
      }
    ) {
      id
      width
      height
      videoDuration
      slideDuration
      transitionDuration
      videos
    }
  }
`

export default HomePage
