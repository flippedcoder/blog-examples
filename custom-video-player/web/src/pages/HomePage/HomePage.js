import { Form, TextField, CheckboxField, Submit } from '@redwoodjs/forms'
import { useMutation, useQuery } from '@redwoodjs/web'
import styled from 'styled-components'

const HomePage = () => {
  const { loading, error, data } = useQuery(SETTING, { variables: { id: 1 } })

  const [updateSetting] = useMutation(UPDATE_SETTING)

  const onSubmit = (data) => {
    console.log(data)
    updateSetting({
      variables: {
        id: 1,
        videoName: data.videoName,
        loop: data.loop,
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
      <VideoPlayer
        controls="controls"
        loop={data.setting.loop || false}
        poster={`https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/${
          data.setting.videoName || 'elephants'
        }.jpg`}
      >
        <source
          src={`https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/${
            data.setting.videoName || 'elephants'
          }.webm`}
          type="video/webm"
        />
        <source
          src={`https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/${
            data.setting.videoName || 'elephants'
          }.mp4`}
          type="video/mp4"
        />
        <source
          src={`https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/${
            data.setting.videoName || 'elephants'
          }.ogv`}
          type="video/ogg"
        />
        Your browser does not support HTML5 video tags.
      </VideoPlayer>
      <Form onSubmit={onSubmit}>
        <FormContainer>
          <TextField name="videoName" />
          <CheckboxField name="loop" />
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
    }
  }
`

const UPDATE_SETTING = gql`
  mutation UpdateSetting($id: Int, $videoName: String, $loop: Boolean) {
    updateSetting(input: { id: $id, videoName: $videoName, loop: $loop }) {
      id
      videoName
      loop
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

const VideoPlayer = styled.video`
  display: block;
  margin: 0 auto;
  width: 50%;
`

export default HomePage
