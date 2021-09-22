import { Marker, Popup } from "react-leaflet"
import Icons from './Icons'

const LocationMarkers = ({ eventData }) => {

const fireIcon = Icons()[0]
const stormIcon = Icons()[1]
const volcanoIcon = Icons()[2]
const markers = eventData.map((ev, index) => {

    if (ev.categories[0].id === 8) {
        return (
            <Marker
                key={index}
                position={[
                ev.geometries[0].coordinates[1],
                ev.geometries[0].coordinates[0],
                ]}
                icon={fireIcon}
            >
                <Popup>{ev.title}</Popup>
            </Marker>
            )
        }

    if (ev.categories[0].id === 10) {
        return (
            <Marker
                key={index}
                position={[
                ev.geometries[0].coordinates[1],
                ev.geometries[0].coordinates[0],
            ]}
            icon={stormIcon}
            >
            <Popup>{ev.title}</Popup>
            </Marker>
        )
    }

    if (ev.categories[0].title === "Volcanoes" && ev.id !== "EONET_354") {
        return (
            <Marker
                key={index}
                position={[
                ev.geometries[0].coordinates[1],
                ev.geometries[0].coordinates[0],
                ]}
                icon={volcanoIcon}
            >
                <Popup>{ev.title}</Popup>
            </Marker>
            )
        }
        return null
    })

    return  markers
}

export default LocationMarkers
