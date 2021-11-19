import { useQuery } from '@redwoodjs/web'

const WorldPage = () => {
  const { loading, data } = useQuery(WORLDS)

  if (loading) {
    return <div>Loading...</div>
  }

  const worldUrl = data?.worlds[data.worlds.length - 1]?.imageName || 'room-360_nag5ns.jpg'

  return (
    <a-scene>
      <a-assets>
        <img
          id="room"
          crossorigin="anonymous"
          src={`https://res.cloudinary.com/milecia/image/upload/${worldUrl}`}
        />
      </a-assets>
      <a-sky id="image-360" radius="10" src="#room"></a-sky>
      <a-camera look-controls-enabled={true}></a-camera>
    </a-scene>
  )
}

const WORLDS = gql`
  query Worlds {
    worlds {
      id
      imageName
    }
  }
`

export default WorldPage
