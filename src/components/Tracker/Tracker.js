import 'leaflet/dist/leaflet.css'
import fire from '../../resources/fire.svg'
import storm from '../../resources/storm.svg'
import volcano from '../../resources/volcano.svg'
import Prediction from './Prediction'
import Map from './Map'
import useFetch from '../../hooks/useFetch'
import Loader from '../Loader/Loader'
import Location from './Location'

const Tracker=() => {
    const {eventData,loading} = useFetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?api_key=UySKzcughPK8y0gc9Nvhi2GemldYSblbzhgcCOZH')
    const lat = Location()[0];
    const long = Location()[1];
    return (
    <div className="map" >
    {!loading ? <Map eventData={eventData} lat={lat} long={long}/> : <Loader/> }
    <div style={{display:"flex",margin:"6px"}}
    >
    <img  className="mapIndicator" src={fire} alt="fire.svg" /><h3 className="mapText"> : Wildfire &emsp; </h3>
    <img className="mapIndicator" src={storm} alt="storm.svg" /><h3 className="mapText"> : Severe Storm &emsp;</h3>
    <img className="mapIndicator" src={volcano} alt="volcano.svg" /><h3 className="mapText"> : Volcano &emsp;</h3><br/>
    </div>
    <Prediction eventData={eventData} lat={lat} long={long} />
    <h4>Made with ❤️ by Team Outliers</h4>
    </div>
        )
}

export default Tracker