import React, { useState, useEffect } from 'react'
import { fabric } from 'fabric'
import { useMutation, useQuery } from '@redwoodjs/web'

const CREATE_CAPTURE_MUTATION = gql`
  mutation CreateCaptureMutation($input: CreateCaptureInput!) {
    createCapture(input: $input) {
      id
    }
  }
`

const GET_CAPTURES = gql`
  query {
    captures {
      name
      url
    }
  }
`

const CapturePage = () => {
  const [createCapture] = useMutation(CREATE_CAPTURE_MUTATION)
  const { data } = useQuery(GET_CAPTURES)
  const [canvas, setCanvas] = useState('')

  useEffect(() => {
    setCanvas(initCanvas())
  }, [])

  const initCanvas = () =>
    new fabric.Canvas('capture', {
      height: 500,
      width: 500,
      backgroundColor: '#F6F6F6',
      isDrawingMode: true,
    })

  const saveCapture = () => {
    const imageUrl = canvas.lowerCanvasEl.toDataURL()

    const input = {
      name: `Capture${Math.random().toString()}`,
      url: imageUrl,
    }

    createCapture({
      variables: { input },
    })
  }

  return (
    <>
      <button onClick={saveCapture}>Save as image</button>
      <canvas id="capture" />
      <div style={{ display: 'flex' }}>
        {data?.captures &&
          data.captures.map((capture) => (
            <img
              key={capture.name}
              style={{ padding: '24px', height: '100px', width: '100px' }}
              src={capture.url}
            />
          ))}
      </div>
    </>
  )
}

export default CapturePage
