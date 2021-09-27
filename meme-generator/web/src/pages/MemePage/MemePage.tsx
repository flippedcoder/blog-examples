import { Image, Transformation } from 'cloudinary-react'
import { useMutation } from '@redwoodjs/web'
import { useState } from 'react'

const CREATE_MEME_MUTATION = gql`
  mutation CreateMemeMutation($input: CreateMemeInput!) {
    createMeme(input: $input) {
      id
    }
  }
`

const MemePage = () => {
  const [createMeme] = useMutation(CREATE_MEME_MUTATION)
  const [title, setTitle] = useState<string>('')
  const [textTop, setTextTop] = useState<string>('')
  const [textBottom, setTextBottom] = useState<string>('')

  const saveMeme = (event) => {
    const imageUrl = `http://res.cloudinary.com/milecia/image/upload/c_scale,q_auto,w_400/g_north,l_text:arial_60:${event.target.textTop},y_20/g_south,l_text:arial_60:${event.target.textBottom},y_20/cat.jpg`

    const input = {
      title: event.target.title.value,
      imageUrl: imageUrl,
      textTop: event.target.textTop.value,
      textBottom: event.target.textBottom.value
    }
    createMeme({
      variables: { input },
    })
  }

  return (
    <>
      <form
        onSubmit={saveMeme}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '350px'
        }}
      >
        <div>
          <label htmlFor='title'>Title of image:</label>
          <input
            type='text'
            name='title'
            onChange={e => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor='textTop'>Text at top of the image:</label>
          <input
            type='text'
            name='textTop'
            onChange={e => setTextTop(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor='textBottom'>Text at bottom of the image:</label>
          <input
            type='text'
            name='textBottom'
            onChange={e => setTextBottom(e.currentTarget.value)}
          />
        </div>
        <button>Save that meme</button>
      </form>
      <Image cloudName="milecia" publicId="cat.jpg" >
        <Transformation width="400" quality="auto" crop="scale" />
        {textTop !== '' && <Transformation overlay={{ fontFamily: "arial", fontSize: 60, text: textTop }} gravity="north" y="20" />}
        {textBottom !== '' && <Transformation overlay={{ fontFamily: "arial", fontSize: 60, text: textBottom }} gravity="south" y="20" />}

      </Image>
    </>
  )
}

export default MemePage
