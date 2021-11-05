import { MetaTags, useMutation } from '@redwoodjs/web'
import { useCallback, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { toPng } from 'html-to-image'

const CREATE_SNAPSHOT_MUTATION = gql`
  mutation CreateSnapshotMutation($input: CreateSnapshotInput!) {
    createSnapshot(input: $input) {
      id
    }
  }
`

const MapPage = () => {
  const mapRef = useRef(null)
  const [createSnapshot] = useMutation(CREATE_SNAPSHOT_MUTATION)
  const [position, setPosition] = useState([36.49, -100])
  const [name, setName] = useState('The pit of the Midwest')

  const updatePin = (e) => {
    e.preventDefault()

    const { xPosition, yPosition, name } = e.target.elements

    setPosition([xPosition.value, yPosition.value])
    setName(name.value)

    onCapture()
  }

  const onCapture = useCallback(async () => {
    if (mapRef.current === null) {
      return
    }

    const dataUrl = await toPng(mapRef.current, { cacheBust: true })

    const uploadApi = `https://api.cloudinary.com/v1_1/milecia/image/upload`

    const formData = new FormData()
    formData.append('file', dataUrl)
    formData.append('upload_preset', 'cwt1qiwn')

    const res = await fetch(uploadApi, {
      method: 'POST',
      body: formData,
    })

    const result = await res.json()

    const input = {
      name: name,
      xPosition: Number(position[0]),
      yPosition: Number(position[1]),
      imageUrl: result.url,
    }

    createSnapshot({
      variables: { input },
    })
  }, [mapRef])

  return (
    <div style={{ display: 'flex' }}>
      <MetaTags title="Map" />
      <div ref={mapRef}>
        <h1>{name}</h1>
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: '550px', width: '750px' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>The armpit of Oklahoma.</Popup>.
          </Marker>
        </MapContainer>
      </div>
      <form onSubmit={updatePin}>
        <div>
          <label for="name">Change map name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label for="xPosition">Change pin x-position</label>
          <input type="number" name="xPosition" />
        </div>
        <div>
          <label for="yPosition">Change pin y-position</label>
          <input type="number" name="yPosition" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default MapPage
