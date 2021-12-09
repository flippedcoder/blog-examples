import { useQuery, useMutation } from '@redwoodjs/web'
import { useState, useRef } from 'react'
import { toPng } from 'html-to-image'

const CREATE_MAP_MUTATION = gql`
  mutation CreateMapMutation($input: CreateMapInput!) {
    createMap(input: $input) {
      id
    }
  }
`

const GET_ASTEROIDS = gql`
  query GetAsteroids($input: AsteroidInput!) {
    asteroids(input: $input) {
      missDistance
      estimatedDiameter
    }
  }
`

function AsteroidPage() {
  const [createMap] = useMutation(CREATE_MAP_MUTATION)

  const canvasRef = useRef(null)

  const [startDate, setStartDate] = useState("2021-08-12")
  const [endDate, setEndDate] = useState("2021-08-15")
  const [viewDate, setViewDate] = useState("2021-08-13")

  const { loading, data } = useQuery(GET_ASTEROIDS, {
    variables: { input: { startDate: startDate, endDate: endDate, viewDate: viewDate }},
  })

  if (loading) {
    return <div>Loading...</div>
  }

  async function submit(e) {
    e.preventDefault()
    const mapName = e.currentTarget.mapName.value
    const startDate = e.currentTarget.startDate.value
    const endDate = e.currentTarget.endDate.value
    const viewDate = e.currentTarget.viewDate.value

    setStartDate(startDate)
    setEndDate(endDate)
    setViewDate(viewDate)
    
    if (canvasRef.current === null) {
      return
    }

    const dataUrl = await toPng(canvasRef.current, { cacheBust: true })

    const uploadApi = `https://api.cloudinary.com/v1_1/milecia/image/upload`

    const formData = new FormData()
    formData.append('file', dataUrl)
    formData.append('upload_preset', 'cwt1qiwn')

    const cloudinaryRes = await fetch(uploadApi, {
      method: 'POST',
      body: formData,
    })

    const input = {
      name: mapName,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      mapUrl: cloudinaryRes.url
    }

    createMap({
      variables: { input },
    })
  }

  function makeAsteroidMap() {
    if (canvasRef.current.getContext) {
      let ctx = canvasRef.current.getContext('2d')
  
      data.asteroids.forEach((asteroid) => {
        const scaledDistance = asteroid.missDistance / 75000
        const scaledSize = asteroid.estimatedDiameter * 100
        let circle = new Path2D()

        circle.arc(scaledDistance * 2, scaledDistance, scaledSize, 0, 2 * Math.PI)
    
        ctx.fill(circle)
      })
    }
  }

  return (
    <>
      <h1>AsteroidPage</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="mapName">Map Name</label>
          <input type="text" name="mapName" />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" />
        </div>
        <div>
          <label htmlFor="viewDate">View Date</label>
          <input type="date" name="viewDate" />
        </div>
        <button type="submit">Save Asteroid Map</button>
      </form>
      <button type="button" onClick={makeAsteroidMap}>View Map</button>
      <canvas id="asteroidMap" ref={canvasRef} height="3000" width="3000"></canvas>
    </>
  )
}

export default AsteroidPage
