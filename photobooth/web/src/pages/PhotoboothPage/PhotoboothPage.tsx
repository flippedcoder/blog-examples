import { useEffect, useRef, useState } from 'react'
import { useMutation } from '@redwoodjs/web'

const CREATE_PHOTO_MUTATION = gql`
  mutation CreatePhotoMutation($input: CreatePhotoInput!) {
    createPhoto(input: $input) {
      id
    }
  }
`

const PhotoboothPage = () => {
  const [createPhoto] = useMutation(CREATE_PHOTO_MUTATION)
  const videoRef = useRef()
  const canvasRef = useRef()
  const [mediaStream, setMediaStream] = useState(null)
  const [src, setSrc] = useState(null)

  useEffect(() => {
    async function enableStream() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      })
      setMediaStream(stream)
    }

    if (!mediaStream) {
      enableStream()
    }
  }, [mediaStream])

  // @ts-ignore
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    // @ts-ignore
    videoRef.current.srcObject = mediaStream
  }

  const handleCanPlay = () => {
    // @ts-ignore
    videoRef.current.play()
  }

  const uploadImage = async (imgSrc) => {
    const uploadApi = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

    const formData = new FormData()
    formData.append('file', imgSrc)
    formData.append('upload_preset', uploadPreset)

    const cloudinaryRes = await fetch(uploadApi, {
      method: 'POST',
      body: formData,
    })

    const input = {
      url: cloudinaryRes.url,
      userId: '1efeb34e-287f-11ec-9621-0242ac130002',
    }

    createPhoto({
      variables: { input },
    })
  }

  const takePicture = () => {
    // @ts-ignore
    const context = canvasRef.current.getContext('2d')

    context.drawImage(videoRef.current, 0, 0, 580, 320)

    // @ts-ignore
    const src = canvasRef.current.toDataURL()
    setSrc(src)

    uploadImage(src)
  }

  return (
    <>
      <h1>Photobooth</h1>
      <video
        id="video"
        ref={videoRef}
        onCanPlay={handleCanPlay}
        autoPlay
        playsInline
        muted
      >
        Video stream not available.
      </video>
      <button onClick={takePicture}>Take photo</button>
      <canvas
        style={{ display: 'none' }}
        ref={canvasRef}
        width={580}
        height={320}
      ></canvas>
      <img
        id="photo"
        alt="The screen capture will appear in this box."
        src={src}
      />
    </>
  )
}

export default PhotoboothPage
