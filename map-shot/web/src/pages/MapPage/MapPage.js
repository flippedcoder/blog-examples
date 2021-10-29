import { MetaTags } from '@redwoodjs/web'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapPage = () => {
  const position = [36.49, -100]

  return (
    <>
      <MetaTags title="Map" />
      <h1>MapPage</h1>
      <MapContainer
        center={position}
        zoom={8}
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
    </>
  )
}

export default MapPage
