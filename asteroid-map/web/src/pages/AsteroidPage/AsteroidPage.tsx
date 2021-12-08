import { useQuery, useMutation } from '@redwoodjs/web'
import { useState, useRef } from 'react'

const CREATE_MAP_MUTATION = gql`
  mutation CreateMapMutation($input: CreateSnapshotInput!) {
    createSnapshot(input: $input) {
      id
    }
  }
`

const GET_ASTEROIDS = gql`
  query {
    asteroids {
      missDistance
      estimatedDiameter
    }
  }
`

function AsteroidPage() {
  const [createMap] = useMutation(CREATE_MAP_MUTATION)
  const canvasRef = useRef(null)
  const [name, setName] = useState<string>()
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date(new Date().getTime()+(2*24*60*60*1000)))
  const [viewDate, setViewDate] = useState<Date>(new Date())

  const { loading, data } = useQuery(GET_ASTEROIDS, {
    variables: { startDate, endDate, viewDate },
  })

  function submit() {

  }

  if (loading) {
    return <div>Loading...</div>
  }

  function makeAsteroidMap() {
    if (canvasRef.current.getContext) {
      let ctx = canvasRef.current.getContext('2d')
  
      data.forEach((asteroid) => {
        const scaledDistance = asteroid.missDistance / 1000000
        const scaledSize = asteroid.estimatedDiameter
        let circle = new Path2D()

        circle.arc(scaledDistance, 35, scaledSize, 0, 2 * Math.PI)
    
        ctx.fill(circle)
      })
    }
  }

  return (
    <>
      <h1>AsteroidPage</h1>
      <form>
        <div>
          <label htmlFor="name">Map Name</label>
          <input type="text" name="name" onChange={(e) => setName(e.currentTarget.value)} />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="datetime" name="startDate" onChange={(e) => setStartDate(new Date(e.currentTarget.value))} />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="datetime" name="endDate" onChange={(e) => setEndDate(new Date(e.currentTarget.value))} />
        </div>
        <div>
          <label htmlFor="viewDate">View Date</label>
          <input type="datetime" name="viewDate" onChange={(e) => setViewDate(new Date(e.currentTarget.value))} />
        </div>
        <button type="button" onClick={makeAsteroidMap}>View Map</button>
        <button type="submit">Save Asteroid Map</button>
      </form>
      <canvas id="asteroidMap" ref={canvasRef}></canvas>
    </>
  )
}

export default AsteroidPage
