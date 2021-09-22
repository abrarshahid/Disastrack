import {MapContainer,TileLayer,Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import LocationMarkers from './locationMarkers'
import Icons from './Icons'


const Map = ({eventData,lat,long}) => {
    const locationIcon = Icons()[3]

    return (
        <MapContainer
        center={[22.505, 92.09]}
        style={{height: "66vh", width:"96vw" ,borderRadius:"4px",position:"sticky"}}
        zoom={5}
        scrollWheelZoom={false}>
        <TileLayer
        url="https://api.mapbox.com/styles/v1/abrarshahid/cks1lpo8x4rua17pezzk03q4q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWJyYXJzaGFoaWQiLCJhIjoiY2tzMTh5djVnMXJsYTJxczcxb2d6MHpndiJ9.9yQtghf6v7p53mISRq-pDg"
        />
        <LocationMarkers eventData={eventData} />
        <Marker  position={[lat,long]} icon={locationIcon} ><Popup>Your Location</Popup></Marker>
        </MapContainer>
    )
}

export default Map