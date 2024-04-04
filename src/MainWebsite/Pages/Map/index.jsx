import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css";
import './style.css'
const index = () => {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3"
    }
  ];

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: require("./icons/placeholder.png"),
    iconSize: [38, 38] 
  });

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer 
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.geocode}
          icon={customIcon}
        ></Marker>
      ))}
    </MapContainer>
  )
}
export default index