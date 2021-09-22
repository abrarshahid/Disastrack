import {useState} from 'react'
const Location = () => {
    const [lat,setLat] = useState(0)
    const [long,setLong] = useState(0)
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
            })
        }

        return [lat,long];
}

export default Location;


