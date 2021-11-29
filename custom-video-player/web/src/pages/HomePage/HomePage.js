import {
  Form,
  Label,
  TextField,
  CheckboxField,
  RangeField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'
import { useMutation, useQuery } from '@redwoodjs/web'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const HomePage = () => {
  const { loading, error, data } = useQuery(SETTING, { variables: { id: 1 } })

  console.log(data)

  const [updateSetting] = useMutation(UPDATE_SETTING)

  const onSubmit = (data) => {
    console.log(data)
    updateSetting({
      variables: {
        id: 1,
        videoName: data.videoName,
        loop: data.loop,
        controls: data.controls,
        volume: Number(data.volume),
        playbackRate: Number(data.playbackRate),
      },
    })
  }

  if (loading) {
    return <div>Loading..</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <Container>
      <VideoPlayer>
        <ReactPlayer
          controls={data.setting.controls || true}
          loop={data.setting.loop || false}
          volume={data.setting.volume / 100 || 0.5}
          playbackRate={data.setting.playbackRate || 1}
          url={`https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/${
            data.setting.videoName || 'elephant_herd'
          }.mp4`}
        ></ReactPlayer>
      </VideoPlayer>
      <Form onSubmit={onSubmit}>
        <FormContainer>
          <Label name="videoName">Video Name</Label>
          <TextField name="videoName" defaultValue={data.setting.videoName} />
          <Label name="loop">Loop</Label>
          <CheckboxField name="loop" defaultValue={data.setting.loop} />
          <Label name="controls">Controls</Label>
          <CheckboxField name="controls" defaultValue={data.setting.controls} />
          <Label name="volume">Volume</Label>
          <RangeField name="volume" defaultValue={data.setting.volume} />
          <Label name="playbackRate">1x</Label>
          <RadioField
            name="playbackRate"
            defaultValue={data.setting.playbackRate}
            value={1}
          />
          <Label name="playbackRate">1.5x</Label>
          <RadioField
            name="playbackRate"
            defaultValue={data.setting.playbackRate}
            value={1.5}
          />
          <Label name="playbackRate">2x</Label>
          <RadioField
            name="playbackRate"
            defaultValue={data.setting.playbackRate}
            value={2}
          />
          <Submit>Save</Submit>
        </FormContainer>
      </Form>
    </Container>
  )
}

const SETTING = gql`
  query Setting($id: Int) {
    setting(id: $id) {
      id
      videoName
      loop
      controls
      volume
      playbackRate
    }
  }
`

const UPDATE_SETTING = gql`
  mutation UpdateSetting(
    $id: Int
    $videoName: String
    $loop: Boolean
    $controls: Boolean
    $volume: Float
    $playbackRate: Float
  ) {
    updateSetting(
      input: {
        id: $id
        videoName: $videoName
        loop: $loop
        controls: $controls
        volume: $volume
        playbackRate: $playbackRate
      }
    ) {
      id
      videoName
      loop
      controls
      volume
      playbackRate
    }
  }
`

const Container = styled.div`
  width: 100%;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 25px;
  width: 500px;
`

const VideoPlayer = styled.div`
  display: block;
  margin: 0 auto;
  width: 50%;
`

export default HomePage
