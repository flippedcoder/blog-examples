import { useQuery, useMutation } from '@redwoodjs/web'
import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'

const GET_IMAGES = gql`
  query {
    images {
      id
      name
      url
    }
  }
`

const CREATE_HEATMAP_MUTATION = gql`
  mutation CreateHeatmapMutation($input: CreateHeatmapInput!) {
    createHeatmap(input: $input) {
      id
    }
  }
`

const HeatmapPage = () => {
  const [createHeatmap] = useMutation(CREATE_HEATMAP_MUTATION)
  const { data, loading } = useQuery(GET_IMAGES)

  const heatmapRef = useRef(null)
  const [image, setImage] = useState({id: 1, url: 'https://res.cloudinary.com/milecia/image/upload/v1606580778/3dogs.jpg'})
  const [bottom, setBottom] = useState<string>('0')
  const [left, setLeft] = useState<string>('0')

  if (loading) {
    return <div>Loading...</div>
  }

  const uploadHeatmap = async () => {
    if (heatmapRef.current === null) {
      return
    }

    const dataUrl = await toPng(heatmapRef.current, { cacheBust: true })

    const uploadApi = `https://api.cloudinary.com/v1_1/milecia/image/upload`

    const formData = new FormData()
    formData.append('file', dataUrl)
    formData.append('upload_preset', 'cwt1qiwn')

    const cloudinaryRes = await fetch(uploadApi, {
      method: 'POST',
      body: formData,
    })

    const input = {
      heatmapImage: cloudinaryRes.url,
      imageId: image.id,
    }

    createHeatmap({
      variables: { input },
    })
  }

  const setPosition = (position) => {
    switch(position) {
      case 'top-left':
        setBottom('0')
        setLeft('0')
        break
      case 'top-right':
        setBottom('0')
        setLeft('80%')
        break
      case 'bottom-left':
        setBottom('-150px')
        setLeft('0')
        break
      case 'bottom-right':
        setBottom('-150px')
        setLeft('80%')
        break
    }
  }

  return (
    <>
      <h1>HeatmapPage</h1>
      <select onChange={(e) => {
        const {id, url} = JSON.parse(e.target.value)
        setImage({id: id, url: url})}
        }
      >
        {data.images.map(image => (
          <option
            key={image.id}
            value={`{"id": ${image.id}, "url": "${image.url}"}`}
          >
            {image.name}
          </option>
          ))
        }
      </select>
      <button onClick={uploadHeatmap}>Upload Heatmap to Cloudinary</button>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <button onClick={() => setPosition('top-left')}>Top-Left</button>
        <button onClick={() => setPosition('top-right')}>Top-Right</button>
        <button onClick={() => setPosition('bottom-left')}>Bottom-Left</button>
        <button onClick={() => setPosition('bottom-right')}>Bottom-Right</button>
      </div>
      <div
        ref={heatmapRef}
        style={{
          backgroundImage: `url(${image.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: 300,
          position: 'absolute',
          width: '100%'
        }}
      >
        <div
          style={{
            background: 'radial-gradient(rgba(0, 255, 25, 0.5), rgba(255, 0, 25, 0.5))',
            height: 150,
            position: 'relative',
            bottom: bottom,
            left: left,
            width: 250,
            zIndex: 10
          }}
        ></div>
      </div>
    </>
  )
}

export default HeatmapPage
