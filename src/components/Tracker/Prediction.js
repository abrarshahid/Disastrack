import haversine_formula from './Distance'
import DecisionTable from './DecisionTable'
import {useState} from 'react';

const Prediction = ({eventData,lat,long}) => {
    const [time,setTime] = useState(0);
    const [disaster,setDisaster] = useState(''); 
    eventData.map((ev, index) => {
        let lat2 = ev.geometries[0].coordinates[1]
        let long2 = ev.geometries[0].coordinates[0]
        if (haversine_formula(lat,long,lat2,long2)<2500 && time!==1) {
            setTime(1)
            setDisaster(ev.categories[0].title)
        }
        return null
    })
    return(
    <div>
        {time>0 ?
            (<div
                data-aos="fade-up"
                data-aos-duration="3000"
            >
            <h3
            >Your Area is prone to {disaster}.Please follow the decisions below:</h3>
            <DecisionTable prediction={"disaster"} />
            </div>):
            (eventData !== [] ? <div
                data-aos="fade-up"
                data-aos-duration="3000"
            > <h3>Your Area is Safe.Please follow the decisions below : </h3><DecisionTable prediction={"safe"} /></div> :  <p>Loading..</p>)
            }

        </div>
    )
}

export default Prediction